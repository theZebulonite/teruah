"use client"; // Necesario si estás usando el enrutador de Next.js 13+ y hooks de React

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga
  const [isSent, setIsSent] = useState(false); // Estado para controlar si el mensaje se envió
  const [error, setError] = useState(""); // Estado para manejar errores

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Verifica si el elemento es un input de tipo checkbox
    if (type === "checkbox" && "checked" in e.target) {
      setFormData({
        ...formData,
        [name]: e.target.checked, // Usa e.target.checked para checkboxes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, // Usa value para otros elementos
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Activar la barra de progreso
    setError(""); // Limpiar errores anteriores
    setIsSent(false); // Limpiar estado de envío

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al enviar el mensaje.");
      }

      const data = await response.json();
      setIsSent(true); // Mensaje enviado correctamente
      setFormData({ name: "", email: "", message: "", subscribe: false }); // Limpiar el formulario
    } catch (error) {
      setError("Hubo un error al enviar el mensaje."); // Mostrar error
    } finally {
      setIsLoading(false); // Desactivar la barra de progreso
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contacto</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo de nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Campo de correo electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Campo de mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Checkbox de suscripción */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-900">
              Suscribirse para recibir noticias
            </label>
          </div>

          {/* Barra de progreso */}
          {isLoading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full animate-progress"></div>
            </div>
          )}

          {/* Mensaje de éxito o error */}
          {isSent && (
            <p className="text-green-600 text-center">¡Mensaje enviado correctamente!</p>
          )}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Botón de enviar */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isLoading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}