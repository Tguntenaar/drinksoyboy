import { Hero } from './components/Hero';
import { Drink } from './components/Drink';
import { Flavors } from './components/Flavors';
import { Gallery } from './components/Gallery';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-berry px-5 py-3 text-milk focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <Drink />
        <Flavors />
        <Gallery />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
