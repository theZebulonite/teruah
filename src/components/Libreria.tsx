"use client";

import React from 'react';
import BookCard from "./BookCard";

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
  {
    title: "Otro Libro Más",
    imageUrl: "https://m.media-amazon.com/images/I/81A5uyPSxQL._SL1500_.jpg",
    productUrl: "https://amzn.to/3QcHRhP",
  },
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
  {
    title: "Otro Libro Más",
    imageUrl: "https://m.media-amazon.com/images/I/81A5uyPSxQL._SL1500_.jpg",
    productUrl: "https://amzn.to/3QcHRhP",
  },
];

const Libreria: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-900">Nuestra Librería</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Libreria;
