import { NextRequest, NextResponse } from 'next/server';
import { generateToken, verifyPassword } from '@/lib/auth';
import { prisma } from '@/lib/db';

const DEMO_USERS = [
  { id: 'admin-001', email: 'admin@sriharinathlogistics.com', password: 'admin123', name: 'Super Admin', role: 'Super Admin', roleId: 'super-admin' },
  { id: 'ops-001', email: 'ops@sriharinathlogistics.com', password: 'ops123', name: 'Rahul Kumar', role: 'Operations Manager', roleId: 'ops-manager' },
  { id: 'sales-001', email: 'sales@sriharinathlogistics.com', password: 'sales123', name: 'Priya Sharma', role: 'Sales Executive', roleId: 'sales-exec' },
  { id: 'dispatch-001', email: 'dispatch@sriharinathlogistics.com', password: 'dispatch123', name: 'Anil Reddy', role: 'Dispatch Executive', roleId: 'dispatch-exec' },
  { id: 'accounts-001', email: 'accounts@sriharinathlogistics.com', password: 'accounts123', name: 'Sunita Patel', role: 'Accounts', roleId: 'accounts' },
  { id: 'hr-001', email: 'hr@sriharinathlogistics.com', password: 'hr123', name: 'Vikram Singh', role: 'HR Manager', roleId: 'hr-manager' },
  { id: 'driver-001', email: 'driver@sriharinathlogistics.com', password: 'driver123', name: 'Raju K', role: 'Driver', roleId: 'driver' },
  { id: 'support-001', email: 'support@sriharinathlogistics.com', password: 'support123', name: 'Meera K', role: 'Customer Support', roleId: 'support' },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email and password required' }, { status: 400 });
    }

    // Check demo users first
    const demoUser = DEMO_USERS.find((u) => u.email === email && u.password === password);
    if (demoUser) {
      const token = generateToken(demoUser.id, demoUser.roleId);
      const response = NextResponse.json({ success: true, data: { user: { id: demoUser.id, name: demoUser.name, email: demoUser.email, role: demoUser.role } } });
      response.cookies.set('auth-token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 604800, path: '/' });
      response.cookies.set('user-role', demoUser.roleId, { sameSite: 'lax', maxAge: 604800, path: '/' });
      response.cookies.set('user-name', demoUser.name, { sameSite: 'lax', maxAge: 604800, path: '/' });
      return response;
    }

    // Check database users
    try {
      const dbUser = await prisma.user.findUnique({ where: { email }, include: { role: true } });
      if (dbUser && dbUser.isActive) {
        const isValid = await verifyPassword(password, dbUser.password);
        if (isValid) {
          const token = generateToken(dbUser.id, dbUser.roleId);
          await prisma.user.update({ where: { id: dbUser.id }, data: { lastLogin: new Date() } });
          const response = NextResponse.json({ success: true, data: { user: { id: dbUser.id, name: dbUser.name, email: dbUser.email, role: dbUser.role.displayName } } });
          response.cookies.set('auth-token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 604800, path: '/' });
          response.cookies.set('user-role', dbUser.role.name, { sameSite: 'lax', maxAge: 604800, path: '/' });
          response.cookies.set('user-name', dbUser.name, { sameSite: 'lax', maxAge: 604800, path: '/' });
          return response;
        }
      }
    } catch (dbError) {
      console.error('DB auth check failed:', dbError);
    }

    return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
