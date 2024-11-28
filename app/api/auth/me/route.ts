import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import jwt from 'jsonwebtoken';
import getDb from '@/lib/db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET() {
  try {
    const headersList = new Headers(await headers());
    const token = headersList.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const db = await getDb();

    const user = await db.get(
      'SELECT id, name, email, created_at FROM users WHERE id = ?',
      [decoded.userId]
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 