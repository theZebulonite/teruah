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
       <div className="relative">
        <Sidebar />
        <main className="flex flex-col items-center justify-center">{children}</main>
      </div>
      </body>
    </html>
  );
}


