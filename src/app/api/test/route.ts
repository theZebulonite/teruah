import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Conectado a MongoDB' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error conectando a MongoDB', error: (error as Error).message },
      { status: 500 }
    );
  }
}