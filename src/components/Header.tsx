"use client";
import Image from "next/image";
import getBasePath from "@/lib/basePath"; // Asegúrate de que este archivo existe y está correcto

export default function Header() {
  const basePath = getBasePath();

  return (
    <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          alt="Familia leyendo un libro"
          src={`${basePath}/images/header_desktop.png`} // Usar basePath correctamente
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </header>
  );
}
