import { getSubscribers } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subscribers = await getSubscribers();
    return NextResponse.json(subscribers);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los suscriptores" },
      { status: 500 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }
}