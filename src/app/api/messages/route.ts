import { getMessages } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const messages = await getMessages();
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los mensajes" },
      { status: 500 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }
}