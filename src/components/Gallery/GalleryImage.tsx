import React from 'react';

type GalleryImageProps = {
  src: string;
  alt: string;
};

export function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="aspect-square overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}