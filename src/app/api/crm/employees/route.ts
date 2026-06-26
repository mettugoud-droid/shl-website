import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const department = searchParams.get('department') || '';
    const where: Record<string, unknown> = { deletedAt: null };
    if (department) where.department = department;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { employeeCode: { contains: search, mode: 'insensitive' } },
      ];
    }
    const employees = await prisma.employee.findMany({ where, orderBy: { createdAt: 'desc' }, take: 100 });
    return NextResponse.json({ success: true, data: employees });
  } catch (error) {
    console.error('Employees GET error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, department, designation, dateOfJoining, aadhaar, pan, basicSalary } = body;
    if (!name || !phone) {
      return NextResponse.json({ success: false, message: 'Name and phone required' }, { status: 400 });
    }
    const count = await prisma.employee.count();
    const employeeCode = `EMP-${String(count + 1).padStart(3, '0')}`;
    const employee = await prisma.employee.create({
      data: {
        employeeCode, name, phone, email: email || null, department: department || null,
        designation: designation || null, dateOfJoining: dateOfJoining ? new Date(dateOfJoining) : null,
        aadhaar: aadhaar || null, pan: pan || null, basicSalary: basicSalary ? parseFloat(basicSalary) : null, status: 'ACTIVE',
      },
    });
    return NextResponse.json({ success: true, data: employee }, { status: 201 });
  } catch (error) {
    console.error('Employee POST error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create' }, { status: 500 });
  }
}
