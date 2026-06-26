import { NextRequest, NextResponse } from 'next/server';
import { quoteFormSchema } from '@/lib/validations';
import { sendEmail, getAdminNotificationEmail, getCustomerAutoResponse } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const { success: rateLimitSuccess } = rateLimit(ip);

    if (!rateLimitSuccess) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await request.json();
    const validationResult = quoteFormSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 1. Save to database
    try {
      await prisma.lead.create({
        data: {
          source: 'WEBSITE',
          contactName: data.contactPerson,
          email: data.email,
          phone: data.mobile,
          companyName: data.companyName,
          requirement: `${data.shipmentType} | ${data.pickupLocation} → ${data.deliveryLocation} | Vehicle: ${data.vehicleRequirement} | Volume: ${data.monthlyVolume}`,
          stage: 'NEW',
          notes: data.message || '',
        },
      });
    } catch (dbError) {
      console.error('Database save error:', dbError);
      // Continue even if DB save fails - email is more critical
    }

    // 2. Send admin notification email
    const adminEmailHtml = getAdminNotificationEmail(
      {
        companyName: data.companyName,
        contactPerson: data.contactPerson,
        mobile: data.mobile,
        email: data.email,
        pickupLocation: data.pickupLocation,
        deliveryLocation: data.deliveryLocation,
        shipmentType: data.shipmentType,
        vehicleRequirement: data.vehicleRequirement,
        monthlyVolume: data.monthlyVolume,
        message: data.message || 'N/A',
      },
      'quote'
    );

    try {
      await sendEmail({
        to: process.env.EMAIL_TO || 'quotes@sriharinathlogistics.com',
        cc: process.env.EMAIL_CC || 'info@sriharinathlogistics.com',
        subject: '🚚 New Quote Request - SHL Website',
        html: adminEmailHtml,
        replyTo: data.email,
      });
    } catch (emailError) {
      console.error('Admin email error:', emailError);
    }

    // 3. Send customer auto-response
    try {
      const customerEmailHtml = getCustomerAutoResponse(data.contactPerson);
      await sendEmail({
        to: data.email,
        subject: 'Thank You for Contacting Sri Harinath Logistics',
        html: customerEmailHtml,
      });
    } catch (emailError) {
      console.error('Customer email error:', emailError);
    }

    // 4. Return success
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting SHL. Our logistics expert will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
