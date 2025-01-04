import React from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80",
    alt: "Soy drink with fruits"
  },
  {
    url: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh ingredients"
  },
  {
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    alt: "Healthy breakfast"
  },
  {
    url: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    alt: "Smoothie ingredients"
  }
];

export function Gallery() {
  return (
    <section className="px-8 py-20 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-[#4a5759] text-center mb-12">
          Fresh Ingredients, Pure Taste
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}