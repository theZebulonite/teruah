"use client";
import { useState } from "react";
import Link from "next/link"; // Importar Link de Next.js
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir el menú */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Fondo oscuro al abrir el menú */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menú lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 z-50 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botón para cerrar el menú */}
        <button
          className="absolute top-4 right-4 p-2"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>

        {/* Menú de navegación */}
        <nav className="mt-12">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/libreria" className="block p-2 hover:bg-gray-700 rounded">
                Librería
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="block p-2 hover:bg-gray-700 rounded">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="block p-2 hover:bg-gray-700 rounded">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

