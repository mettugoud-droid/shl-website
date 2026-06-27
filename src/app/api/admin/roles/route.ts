import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const roles = await prisma.role.findMany({ orderBy: { name: 'asc' } });
    return NextResponse.json({ success: true, data: roles });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown';
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}
