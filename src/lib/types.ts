// src/lib/types.ts

export interface Message {
    _id: string; // ID del mensaje
    name: string; // Nombre del remitente
    email: string; // Correo electrónico del remitente
    message: string; // Contenido del mensaje
    createdAt: Date; // Fecha de creación
  }
  
  export interface Subscriber {
    _id: string; // ID del suscriptor
    email: string; // Correo electrónico del suscriptor
    subscribedAt: Date; // Fecha de suscripción
  }