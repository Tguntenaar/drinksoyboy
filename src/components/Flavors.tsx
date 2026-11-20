import { Photo } from './Photo';

const flavors = [
  {
    name: 'Original',
    body: 'Soybeans and water with nothing to hide behind. Creamy, a little nutty.',
    photo: 'bottle-glass',
    alt: 'A glass bottle of soy drink with a copper cap in soft window light',
    position: '50% 45%',
    panel: 'bg-white text-berry',
  },
  {
    name: 'Strawberry',
    body: 'Real strawberries blended into the base. Pink without pretending.',
    photo: 'fruit-diagonal',
    alt: 'Strawberries, banana slices and blueberries floating over a pink background',
    position: '40% 60%',
    panel: 'bg-strawberry text-white',
  },
  {
    name: 'Banana',
    body: 'Ripe banana and a smooth body. A smoothie that skipped the blender.',
    photo: 'fruit-banana',
    alt: 'A whole banana and banana slices floating with strawberries over pink',
    position: '62% 20%',
    panel: 'bg-banana text-berry',
  },
  {
    name: 'Berry',
    body: 'Blueberries and raspberries. The tart one of the family.',
    photo: 'fruit-scatter',
    alt: 'Blueberries, raspberries and strawberries scattered across a pink surface',
    position: '30% 50%',
    panel: 'bg-berry text-milk',
  },
];

export function Flavors() {
  return (
    <section id="flavors" aria-labelledby="flavors-title" className="bg-milk py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="flavors-title"
            className="font-display text-5xl leading-[0.95] sm:text-6xl md:col-span-7 lg:text-7xl"
          >
            Four ways to drink it.
          </h2>
          <p className="max-w-md text-lg md:col-span-4 md:col-start-9">
            Original is the base. The other three get real fruit. We're still tasting, so the
            lineup may change before launch.
          </p>
        </div>
      </div>

      <ul
        aria-label="Flavors"
        tabIndex={0}
        className="mx-auto mt-12 flex max-w-[1440px] snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-8 md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
      >
        {flavors.map((flavor) => (
          <li
            key={flavor.name}
            className={`flex w-[78vw] shrink-0 snap-start flex-col rounded-[1.25rem] p-4 sm:w-[46vw] md:w-auto ${flavor.panel}`}
          >
            <Photo
              name={flavor.photo}
              alt={flavor.alt}
              className="arch aspect-[3/4] w-full"
              sizes="(min-width: 768px) 25vw, 78vw"
              position={flavor.position}
            />
            <h3 className="mt-5 font-display text-4xl leading-none lg:text-5xl">{flavor.name}</h3>
            <p className="mt-3 pb-2">{flavor.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
