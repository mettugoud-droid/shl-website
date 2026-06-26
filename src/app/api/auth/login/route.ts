import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password required' },
        { status: 400 }
      );
    }

    // Simple env-based auth (works without database)
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@sriharinathlogistics.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (email === adminEmail && password === adminPassword) {
      const token = generateToken('admin-001', 'super-admin');

      const response = NextResponse.json({
        success: true,
        data: {
          user: {
            id: 'admin-001',
            name: 'Super Admin',
            email: adminEmail,
            role: 'Super Admin',
          },
        },
      });

      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60,
        path: '/',
      });

      return response;
    }

    // If database is available, try Prisma auth
    try {
      const { prisma } = await import('@/lib/db');
      const { verifyPassword } = await import('@/lib/auth');

      const user = await prisma.user.findUnique({
        where: { email },
        include: { role: true },
      });

      if (user && user.isActive) {
        const isValid = await verifyPassword(password, user.password);
        if (isValid) {
          const token = generateToken(user.id, user.roleId);

          await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
          });

          const response = NextResponse.json({
            success: true,
            data: {
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role.displayName,
              },
            },
          });

          response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60,
            path: '/',
          });

          return response;
        }
      }
    } catch {
      // Database not available, fallback already handled above
    }

    return NextResponse.json(
      { success: false, message: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
