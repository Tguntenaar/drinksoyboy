import React from 'react';
import { GalleryImage } from './GalleryImage';
import { galleryImages } from './galleryData';

export function Gallery() {
  return (
    <section className="px-8 py-20 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-[#4a5759] text-center mb-12">
          Fresh Ingredients, Pure Taste
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}