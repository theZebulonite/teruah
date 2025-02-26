import { getSubscribers } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subscribers = await getSubscribers();
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error("Error al obtener los suscriptores:", error); // Registra el error en la consola
    return NextResponse.json(
      { error: "Error al obtener los suscriptores" },
      { status: 500 }
    );
  }
}