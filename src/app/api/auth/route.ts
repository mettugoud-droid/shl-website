import { NextRequest, NextResponse } from 'next/server';

// Simple admin authentication endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Simple auth - compare with env variables
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@sriharinathlogistics.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'change_this_password';

    if (email === adminEmail && password === adminPassword) {
      return NextResponse.json({
        success: true,
        data: {
          token: adminPassword, // Simple token for header-based auth
          user: {
            email: adminEmail,
            name: 'SHL Admin',
            role: 'admin',
          },
        },
      });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    );
  }
}
