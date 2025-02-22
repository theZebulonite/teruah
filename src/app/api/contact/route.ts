import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  const { name, email, message, subscribe } = await request.json();

  // Validación básica
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios." },
      { status: 400 }
    );
  }

  // Validación de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Por favor, ingresa un correo electrónico válido." },
      { status: 400 }
    );
  }

  try {
    // Conectar a MongoDB usando clientPromise
    const client = await clientPromise;
    const db = client.db("teruah_db"); // Especifica el nombre de la base de datos

    // Guardar el mensaje en la colección "messages"
    await db.collection("messages").insertOne({
      name,
      email,
      message,
      subscribe,
      createdAt: new Date(),
    });

    // Si el usuario se suscribe, guardar su correo en la colección "subscribers"
    if (subscribe) {
      await db.collection("subscribers").insertOne({
        email,
        subscribedAt: new Date(),
      });
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    // Verifica si el error es una instancia de Error
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Hubo un error al enviar el mensaje.", details: error.message },
        { status: 500 }
      );
    }

    // Si el error no es una instancia de Error, devuelve un mensaje genérico
    return NextResponse.json(
      { error: "Hubo un error al enviar el mensaje." },
      { status: 500 }
    );
  }
}