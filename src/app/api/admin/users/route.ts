import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: { deletedAt: null },
      include: { role: { select: { displayName: true } } },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: users.map(u => ({ ...u, password: undefined })) });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, phone, roleId } = body;
    if (!name || !email || !password || !roleId) {
      return NextResponse.json({ success: false, message: 'Name, email, password, and role are required' }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ success: false, message: 'Email already exists' }, { status: 400 });
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, phone: phone || null, roleId, isActive: true },
      include: { role: { select: { displayName: true } } },
    });
    return NextResponse.json({ success: true, data: { ...user, password: undefined } }, { status: 201 });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, isActive } = body;
    if (!id) return NextResponse.json({ success: false, message: 'User ID required' }, { status: 400 });
    const user = await prisma.user.update({ where: { id }, data: { isActive } });
    return NextResponse.json({ success: true, data: { ...user, password: undefined } });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}
