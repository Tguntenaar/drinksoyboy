import { Snowflake, Recycle, Sprout } from 'lucide-react';
import { Photo } from './Photo';

const label = [
  { name: 'Soybeans', value: 'organic' },
  { name: 'Water', value: 'filtered spring water' },
  { name: 'Fruit', value: 'real, in the flavored bottles' },
  { name: 'Sweetness', value: 'just enough' },
  { name: 'Seriousness', value: 'trace amounts' },
];

const points = [
  {
    icon: Sprout,
    title: 'Pure ingredients',
    body: 'Organic soybeans and filtered spring water. An ingredient list you can read in one breath.',
  },
  {
    icon: Recycle,
    title: 'Kind packaging, on purpose',
    body: "We want a bottle you can rinse and recycle without thinking about it. That's the plan we're building toward.",
  },
  {
    icon: Snowflake,
    title: 'Made for cold',
    body: 'Shake it, chill it, drink it straight from the bottle. It also behaves in coffee.',
  },
];

export function Drink() {
  return (
    <section id="drink" aria-labelledby="drink-title" className="bg-blush">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:px-8 md:grid-cols-12 md:gap-8 md:py-28">
        <div className="md:col-span-5">
          <Photo
            name="bottle-leaf"
            alt="A white Soyboy bottle with a pink cap and magenta soyboy lettering, standing in a pile of soybeans next to a pale sprig on a pink wall"
            className="arch aspect-[4/5] w-full md:sticky md:top-8"
            sizes="(min-width: 768px) 40vw, 100vw"
            position="50% 60%"
          />
        </div>

        <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
          <h2
            id="drink-title"
            className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            Two ingredients, then the fun part.
          </h2>
          <p className="mt-6 max-w-prose text-lg">
            Soyboy starts with soybeans and water, soaked, ground and pressed into something
            smooth enough to drink on its own. Original stays that way. The flavored bottles
            get real fruit blended in.
          </p>

          <div className="mt-10 border-[3px] border-berry bg-white px-5 pb-4 pt-4 sm:px-6">
            <h3 className="border-b-[10px] border-berry pb-2 text-3xl font-black tracking-tight">
              What's in the bottle
            </h3>
            <dl>
              {label.map((row) => (
                <div
                  key={row.name}
                  className="flex items-baseline justify-between gap-4 border-b border-berry/70 py-2 last:border-b-[5px] last:border-berry"
                >
                  <dt className="font-bold">{row.name}</dt>
                  <dd className="text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="pt-3 text-sm">The recipe is still being tuned before the first run.</p>
          </div>

          <ul className="mt-12 grid gap-8">
            {points.map(({ icon: Icon, title, body }) => (
              <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-x-4">
                <Icon aria-hidden="true" className="mt-0.5 h-7 w-7 text-magenta" strokeWidth={2.25} />
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-1">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
