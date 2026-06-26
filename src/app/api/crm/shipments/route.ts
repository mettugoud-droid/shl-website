import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const mode = searchParams.get('mode') || '';
    const status = searchParams.get('status') || '';
    const where: Record<string, unknown> = { deletedAt: null };
    if (mode) where.mode = mode;
    if (status) where.status = status;
    if (search) {
      where.OR = [
        { shipmentNo: { contains: search, mode: 'insensitive' } },
        { pickupCity: { contains: search, mode: 'insensitive' } },
        { deliveryCity: { contains: search, mode: 'insensitive' } },
      ];
    }
    const shipments = await prisma.shipment.findMany({ where, orderBy: { createdAt: 'desc' }, include: { customer: { select: { companyName: true } } }, take: 100 });
    return NextResponse.json({ success: true, data: shipments });
  } catch (error) {
    console.error('Shipments GET error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, mode, customerId, pickupAddress, pickupCity, pickupState, pickupPincode, pickupContact, pickupPhone, deliveryAddress, deliveryCity, deliveryState, deliveryPincode, deliveryContact, deliveryPhone, totalWeight, numberOfPackages, goodsValue, freightAmount, goodsDescription, ewayBillNo, poNumber, remarks } = body;
    if (!pickupCity || !deliveryCity) {
      return NextResponse.json({ success: false, message: 'Pickup and delivery city required' }, { status: 400 });
    }
    const count = await prisma.shipment.count();
    const today = new Date();
    const shipmentNo = `SHL-${today.getFullYear().toString().slice(2)}${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}-${String(count+1).padStart(4,'0')}`;
    const shipment = await prisma.shipment.create({
      data: {
        shipmentNo, type: type || 'B2B', mode: mode || 'FTL', customerId: customerId || null,
        pickupAddress: pickupAddress || '', pickupCity, pickupState: pickupState || null, pickupPincode: pickupPincode || null, pickupContact: pickupContact || null, pickupPhone: pickupPhone || null,
        deliveryAddress: deliveryAddress || '', deliveryCity, deliveryState: deliveryState || null, deliveryPincode: deliveryPincode || null, deliveryContact: deliveryContact || null, deliveryPhone: deliveryPhone || null,
        totalWeight: totalWeight ? parseFloat(totalWeight) : null, numberOfPackages: numberOfPackages ? parseInt(numberOfPackages) : null,
        goodsValue: goodsValue ? parseFloat(goodsValue) : null, freightAmount: freightAmount ? parseFloat(freightAmount) : null,
        goodsDescription: goodsDescription || null, ewayBillNo: ewayBillNo || null, poNumber: poNumber || null, remarks: remarks || null, status: 'BOOKED',
      },
    });
    return NextResponse.json({ success: true, data: shipment }, { status: 201 });
  } catch (error) {
    console.error('Shipment POST error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create' }, { status: 500 });
  }
}
