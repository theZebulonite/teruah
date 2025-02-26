import { getMessages } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await getMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error al obtener los mensajes:", error); // Registra el error en la consola
    return NextResponse.json(
      { error: "Error al obtener los mensajes" },
      { status: 500 }
    );
  }
}