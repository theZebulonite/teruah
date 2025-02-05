"use client";
import Image from "next/image";
import basePath from "@/lib/basePath"; // Ahora sí existe

export default function Header() {
  return (
    <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          alt="Familia leyendo un libro"
          src={`${basePath}/images/header_desktop.png`} // Se añade el basePath dinámicamente
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </header>
  );
}

