import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendEmail } from "@/lib/mailer"; // Importa la función de envío de correos

export async function POST(request: Request) {
  const { name, email, message, subscribe } = await request.json();

  // Validación básica
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios." },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("teruah_db");

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

    // Enviar notificación por correo electrónico
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      throw new Error("ADMIN_EMAIL environment variable is not defined");
    }

    await sendEmail(
      adminEmail, // Correo del administrador
      "Nuevo mensaje de contacto", // Asunto del correo
      `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}` // Cuerpo del correo
    );

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Hubo un error al enviar el mensaje." },
      { status: 500 }
    );
  }
}