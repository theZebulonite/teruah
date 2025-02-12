import React from "react";
import Image from "next/image"; // Importa el componente Image

interface BookCardProps {
  title: string;
  imageUrl: string;
  productUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, imageUrl, productUrl }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md flex flex-col h-[400px] w-[250px] transition-transform hover:scale-105 hover:shadow-xl">
      {/* Reemplaza <img> por <Image /> */}
      <div className="relative w-full h-52 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill // Usa fill para que la imagen ocupe todo el contenedor
          className="object-cover" // Aplica object-cover para mantener la proporción
        />
      </div>
      <h3 className="text-xl font-bold mt-4 text-slate-900">{title}</h3>
      <button
        onClick={() => window.open(productUrl, "_blank")}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full"
      >
        Comprar en Amazon
      </button>
    </div>
  );
};

export default BookCard;