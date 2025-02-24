import nodemailer from "nodemailer";

// Verifica que las variables de entorno estén definidas
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  throw new Error(
    "Las variables de entorno EMAIL_USER y EMAIL_PASSWORD deben estar definidas."
  );
}

// Configura el transporter para Gmail
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER, // Ahora TypeScript sabe que es un string
    pass: process.env.EMAIL_PASSWORD, // Ahora TypeScript sabe que es un string
  },
});

// Función para enviar correos electrónicos
export async function sendEmail(to: string, subject: string, text: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Correo del remitente
    to, // Correo del destinatario
    subject, // Asunto del correo
    text, // Cuerpo del correo (en texto plano)
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado correctamente.");
  } catch (error) {
    console.error("Error enviando el correo:", error);
    throw error;
  }
}