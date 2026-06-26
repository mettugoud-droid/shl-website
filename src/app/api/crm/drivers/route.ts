import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const where: Record<string, unknown> = { deletedAt: null };
    if (status) where.status = status;
    if (search) { where.OR = [{ name: { contains: search, mode: 'insensitive' } }, { phone: { contains: search } }, { driverCode: { contains: search, mode: 'insensitive' } }]; }
    const drivers = await prisma.driver.findMany({ where, orderBy: { createdAt: 'desc' }, take: 100 });
    return NextResponse.json({ success: true, data: drivers });
  } catch (error) {
    console.error('Drivers GET error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, licenceNo, licenceExpiry, aadhaar, address, bloodGroup, emergencyContact, bankName, bankAccount, ifsc } = body;
    if (!name || !phone) { return NextResponse.json({ success: false, message: 'Name and phone required' }, { status: 400 }); }
    const count = await prisma.driver.count();
    const driverCode = `DRV-${String(count + 1).padStart(3, '0')}`;
    const driver = await prisma.driver.create({
      data: { driverCode, name, phone, licenceNo: licenceNo || null, licenceExpiry: licenceExpiry ? new Date(licenceExpiry) : null, aadhaar: aadhaar || null, address: address || null, bloodGroup: bloodGroup || null, emergencyContact: emergencyContact || null, bankName: bankName || null, bankAccount: bankAccount || null, ifsc: ifsc || null, status: 'AVAILABLE' },
    });
    return NextResponse.json({ success: true, data: driver }, { status: 201 });
  } catch (error) {
    console.error('Driver POST error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create' }, { status: 500 });
  }
}
