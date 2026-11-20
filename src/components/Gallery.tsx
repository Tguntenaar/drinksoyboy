import { Photo } from './Photo';

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-blush py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <h2
          id="gallery-title"
          className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
        >
          Pink on purpose.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          <Photo
            name="fruit-float"
            alt="Banana slices, strawberries and blueberries suspended in mid-air against a pink backdrop"
            className="arch aspect-[4/5] w-full md:col-span-7 md:row-span-2 md:aspect-auto md:h-full"
            sizes="(min-width: 768px) 58vw, 100vw"
            width={1024}
            height={724}
          />
          <Photo
            name="bottle-blush"
            alt="A two-tone white and pink bottle with a copper cap on a stone ledge beside white flowers"
            className="aspect-[4/3] w-full rounded-[1.25rem] md:col-span-5"
            sizes="(min-width: 768px) 42vw, 100vw"
            position="50% 40%"
          />
          <Photo
            name="bottle-stone"
            alt="A matte pink bottle with a steel cap next to a small heap of soybean grits and a green plant"
            className="aspect-[4/3] w-full rounded-[1.25rem] md:col-span-5"
            sizes="(min-width: 768px) 42vw, 100vw"
            position="30% 50%"
          />
        </div>
      </div>
    </section>
  );
}
