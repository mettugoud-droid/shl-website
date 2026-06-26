import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const stage = searchParams.get('stage') || '';
    const where: Record<string, unknown> = {};
    if (stage) where.stage = stage;
    if (search) {
      where.OR = [
        { contactName: { contains: search, mode: 'insensitive' } },
        { companyName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
      ];
    }
    const leads = await prisma.lead.findMany({ where, orderBy: { createdAt: 'desc' }, take: 100 });
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    console.error('Leads GET error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, contactName, phone, email, source, requirement, estimatedValue } = body;
    if (!contactName || !phone) {
      return NextResponse.json({ success: false, message: 'Name and phone required' }, { status: 400 });
    }
    const lead = await prisma.lead.create({
      data: { companyName: companyName || null, contactName, phone, email: email || null, source: source || 'WEBSITE', requirement: requirement || null, estimatedValue: estimatedValue ? parseFloat(estimatedValue) : null, stage: 'NEW' },
    });
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error) {
    console.error('Lead POST error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, stage, notes } = body;
    if (!id || !stage) return NextResponse.json({ success: false, message: 'ID and stage required' }, { status: 400 });
    const lead = await prisma.lead.update({ where: { id }, data: { stage, ...(notes && { notes }) } });
    return NextResponse.json({ success: true, data: lead });
  } catch (error) {
    console.error('Lead PATCH error:', error);
    return NextResponse.json({ success: false, message: 'Failed to update' }, { status: 500 });
  }
}
