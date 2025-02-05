"use client";
import Image from "next/image";
import basePath from "@/lib/basePath"; // Asegúrate de que este archivo existe

export default function Header() {
  return (
    <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          alt="Familia leyendo un libro"
          src={`${basePath}/images/header_desktop.png`} // Agregar basePath aquí
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </header>
  );
}


