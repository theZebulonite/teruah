import React from 'react';

interface BookCardProps {
  title: string;
  imageUrl: string;
  productUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, imageUrl, productUrl }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md flex flex-col h-full transition-transform hover:scale-105 hover:shadow-xl">

      <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-md flex-grow" />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <button 
        onClick={() => window.open(productUrl, "_blank")}
        className="mt-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full"
      >
        Comprar en Amazon
      </button>
    </div>
  );
};

export default BookCard;
