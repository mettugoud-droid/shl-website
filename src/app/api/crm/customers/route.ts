import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || '';
    const where: Record<string, unknown> = { deletedAt: null };
    if (type) where.type = type;
    if (search) {
      where.OR = [
        { companyName: { contains: search, mode: 'insensitive' } },
        { customerCode: { contains: search, mode: 'insensitive' } },
      ];
    }
    const customers = await prisma.customer.findMany({ where, orderBy: { createdAt: 'desc' }, include: { contacts: true }, take: 100 });
    return NextResponse.json({ success: true, data: customers });
  } catch (error) {
    console.error('Customers GET error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, type, gst, pan, industry, creditLimit, contactName, contactPhone, contactEmail, contactDesignation, address, city, state, pincode } = body;
    if (!companyName) {
      return NextResponse.json({ success: false, message: 'Company name required' }, { status: 400 });
    }
    const count = await prisma.customer.count();
    const customerCode = `CUST-${String(count + 1).padStart(3, '0')}`;
    const customer = await prisma.customer.create({
      data: {
        customerCode, companyName, type: type || 'B2B', gst: gst || null, pan: pan || null,
        industry: industry || null, creditLimit: creditLimit ? parseFloat(creditLimit) : 0, status: 'ACTIVE',
        contacts: contactName ? { create: { name: contactName, phone: contactPhone || null, email: contactEmail || null, designation: contactDesignation || null, isPrimary: true } } : undefined,
        branches: { create: { name: 'Head Office', address: address || null, city: city || null, state: state || null, pincode: pincode || null, isDefault: true } },
      },
      include: { contacts: true },
    });
    return NextResponse.json({ success: true, data: customer }, { status: 201 });
  } catch (error) {
    console.error('Customer POST error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create' }, { status: 500 });
  }
}
