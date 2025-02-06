"use client";

import React from 'react';
import BookCard from './BookCard';

const books = [
  {
    title: "La Fe de una Semilla de Mostaza",
    imageUrl: "https://m.media-amazon.com/images/I/71CsEjQz+5L._SL1500_.jpg",
    productUrl: "https://amzn.to/4aMqePE",
  },
  {
    title: "La Familia de los Olivos",
    imageUrl: "https://m.media-amazon.com/images/I/81A5uyPSxQL._SL1500_.jpg",
    productUrl: "https://amzn.to/3QcHRhP",
  },
  {
    title: "The Pomegranate Tree of Justice",
    imageUrl: "https://m.media-amazon.com/images/I/71AF8f2HUqL._SL1500_.jpg",
    productUrl: "https://amzn.to/4hHhU5V",
  },
  {
    title: "The Seed's Courage",
    imageUrl: "https://m.media-amazon.com/images/I/81JEs7q6HUL._SL1500_.jpg",
    productUrl: "https://amzn.to/4jNxGxP",
  },
];

const BooksSection: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-slate-900 text-3xl font-bold text-center mb-6">PUBLICACIONES RECIENTES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;


  