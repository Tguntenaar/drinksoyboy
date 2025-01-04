import React from "react";
import { Leaf } from "lucide-react";

export function Navbar() {
  return (
    <nav className="px-8 py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-[#4a5759]" />
          <span className="font-serif text-xl text-[#4a5759]">
            Drink Soyboy
          </span>
        </div>
        <button className="bg-[#4a5759] text-white px-6 py-2 rounded-full hover:bg-[#3a4749] transition">
          Shop Now
        </button>
      </div>
    </nav>
  );
}
