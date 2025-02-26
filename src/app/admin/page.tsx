"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Message, Subscriber } from "@/lib/types";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  if (status === "unauthenticated") {
    redirect("/auth/signin");
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const messagesResponse = await fetch("/api/messages");
        const messagesData = await messagesResponse.json();
        setMessages(messagesData);

        const subscribersResponse = await fetch("/api/subscribers");
        const subscribersData = await subscribersResponse.json();
        setSubscribers(subscribersData);
      } catch (error) {
        console.error("Error obteniendo los datos:", error);
      }
    }

    if (status === "authenticated") {
      fetchData();
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Panel de administración
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Mensajes</h2>
          <ul className="space-y-4">
            {messages.map((message) => (
              <li
                key={message._id}
                className="p-4 bg-gray-50 rounded-md border border-gray-200"
              >
                <p className="text-gray-600">
                  <strong>Nombre:</strong> {message.name}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {message.email}
                </p>
                <p className="text-gray-600">
                  <strong>Mensaje:</strong> {message.message}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Suscriptores
          </h2>
          <ul className="space-y-4">
            {subscribers.map((subscriber) => (
              <li
                key={subscriber._id}
                className="p-4 bg-gray-50 rounded-md border border-gray-200"
              >
                <p className="text-gray-600">
                  <strong>Email:</strong> {subscriber.email}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}