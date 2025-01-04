import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7d2d4]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
      </main>
    </div>
  );
}