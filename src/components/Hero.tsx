import React from "react";
import { ShoppingBag, Award } from "lucide-react";
// Original image src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80"

export function Hero() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#4a5759] leading-tight">
            Elevate Your Daily Ritual
          </h1>
          <p className="mt-6 text-lg text-[#4a5759]/80">
            Discover our artisanal soy beverage, crafted for New York's
            discerning palates. Made with organic, locally-sourced soybeans and
            filtered spring water.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-[#4a5759] text-white px-8 py-3 rounded-full hover:bg-[#3a4749] transition flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Order Now
            </button>
            <button className="border-2 border-[#4a5759] text-[#4a5759] px-8 py-3 rounded-full hover:bg-[#4a5759] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://storage.googleapis.com/soyboy-images/bottle-with-fruit-2.jpg"
            alt="Premium Soy Drink"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-[#4a5759]" />
              <span className="text-[#4a5759] font-medium">
                2024 Taste Award Winner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
