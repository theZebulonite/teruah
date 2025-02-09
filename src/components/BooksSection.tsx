"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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

const BooksSection: React.FC = () => {
  return (
    <section className="py-8 overflow-hidden">
      {/* Título */}
      <h2 className="text-slate-900 text-3xl font-bold text-center mb-6">
        PUBLICACIONES RECIENTES
      </h2>

      {/* Swiper envuelto en un div con padding lateral */}
      <div className="relative max-w-[90vw] mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={5}
          autoHeight={false}
          navigation
          className="w-full"
          breakpoints={{
            1280: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {books.map((book, index) => (
            <SwiperSlide key={index} className="flex justify-center justify-items-center">
              <BookCard {...book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BooksSection;
