// src/app/layout.tsx

import './globals.css';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Providers } from './providers'; // Importa el componente Providers

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        {/* Envuelve toda la aplicación con Providers */}
        <Providers>
          <div className="relative">
            <Sidebar />
            <main className="flex flex-col items-center justify-center">
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}