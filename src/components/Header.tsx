"use client";
import Image from "next/image";

export default function Header() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          alt="Familia leyendo un libro"
          src={`${basePath}/images/header_desktop.png`}  // Usa el basePath
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </header>
  );
}

