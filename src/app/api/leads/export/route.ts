import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET /api/leads/export - Export leads as CSV
export async function GET(request: NextRequest) {
  try {
    // Auth check
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') as 'CONTACT' | 'QUOTE' | null;
    const status = searchParams.get('status') as string | null;
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Build where clause
    const where: Record<string, unknown> = {};

    if (type) where.type = type;
    if (status) where.status = status;
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) (where.createdAt as Record<string, unknown>).gte = new Date(startDate);
      if (endDate) (where.createdAt as Record<string, unknown>).lte = new Date(endDate);
    }

    const leads = await prisma.lead.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    // Generate CSV
    const headers = [
      'ID',
      'Type',
      'Status',
      'Name',
      'Email',
      'Phone',
      'Company',
      'Subject',
      'Pickup Location',
      'Delivery Location',
      'Shipment Type',
      'Vehicle Requirement',
      'Monthly Volume',
      'Message',
      'Source',
      'Created At',
    ];

    const rows = leads.map((lead) => [
      lead.id,
      lead.type,
      lead.status,
      `"${lead.name}"`,
      lead.email,
      lead.phone,
      `"${lead.company || ''}"`,
      `"${lead.subject || ''}"`,
      `"${lead.pickupLocation || ''}"`,
      `"${lead.deliveryLocation || ''}"`,
      lead.shipmentType || '',
      lead.vehicleRequirement || '',
      lead.monthlyVolume || '',
      `"${lead.message.replace(/"/g, '""')}"`,
      lead.source,
      lead.createdAt.toISOString(),
    ]);

    const csv = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');

    const filename = `shl-leads-${new Date().toISOString().split('T')[0]}.csv`;

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to export leads' },
      { status: 500 }
    );
  }
}
