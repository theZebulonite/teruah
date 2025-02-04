"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
  <div className="relative w-full h-full">
    <img
      alt="Familia leyendo un libro"
      decoding="async"
      data-nimg="fill"
      className="absolute top-0 left-0 w-full h-full object-cover"
      sizes="100vw"
      srcSet="/_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=3840&amp;q=75 3840w"
      src="/_next/image?url=%2Fimages%2Fheader_desktop.png&amp;w=3840&amp;q=75"
    />
  </div>
</header>








  );
}
