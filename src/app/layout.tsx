// src/app/layout.tsx

import './globals.css';
import Sidebar from '../components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4 ml-64">{children}</main> {/* Ajusta el margen cuando la barra esté visible */}
        </div>
      </body>
    </html>
  );
}


