import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const where: Record<string, unknown> = { deletedAt: null };
    if (status) where.status = status;
    if (search) { where.OR = [{ vehicleNo: { contains: search, mode: 'insensitive' } }, { make: { contains: search, mode: 'insensitive' } }]; }
    const vehicles = await prisma.vehicle.findMany({ where, orderBy: { createdAt: 'desc' }, take: 100 });
    return NextResponse.json({ success: true, data: vehicles });
  } catch (error) {
    console.error('Vehicles GET error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { vehicleNo, type, capacity, make, model, year, fuelType, ownerType, chassisNo } = body;
    if (!vehicleNo || !type) { return NextResponse.json({ success: false, message: 'Vehicle number and type required' }, { status: 400 }); }
    const vehicle = await prisma.vehicle.create({
      data: { vehicleNo, type, capacity: capacity || null, make: make || null, model: model || null, year: year ? parseInt(year) : null, fuelType: fuelType || null, ownerType: ownerType || 'OWN', chassisNo: chassisNo || null, status: 'AVAILABLE' },
    });
    return NextResponse.json({ success: true, data: vehicle }, { status: 201 });
  } catch (error) {
    console.error('Vehicle POST error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create' }, { status: 500 });
  }
}
