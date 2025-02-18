import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  const { name, email, message, subscribe } = await request.json();

  // Validación básica
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
  }

  try {
    // Conectar a MongoDB
    const client = await MongoClient.connect(process.env.MONGO_URI!);
    const db = client.db();

    // Guardar el mensaje en la base de datos
    await db.collection("messages").insertOne({
      name,
      email,
      message,
      subscribe,
      createdAt: new Date(),
    });

    client.close();

    return NextResponse.json({ message: "Mensaje enviado correctamente." }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Hubo un error al enviar el mensaje." }, { status: 500 });
  }
}