const links = [
  { href: '#drink', label: 'The drink' },
  { href: '#flavors', label: 'Flavors' },
  { href: '#gallery', label: 'Gallery' },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-milk">
      <nav
        aria-label="Main"
        className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-4 pt-5 sm:px-8 sm:pt-7"
      >
        <a href="/" className="font-display text-3xl leading-none text-berry">
          soyboy
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href} className="hidden md:block">
              <a
                href={link.href}
                className="rounded-full px-4 py-2 font-medium underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#waitlist" className="btn bg-berry text-milk hover:bg-magenta">
              Join the waitlist
            </a>
          </li>
        </ul>
      </nav>

      <div className="mx-auto max-w-[1440px] px-4 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-20">
        <div className="stage">
          <h1 className="wordmark">
            <span className="sr-only">Soyboy</span>
            <span aria-hidden="true" className="word word-soy">
              soy
            </span>
            <span aria-hidden="true" className="word word-boy">
              boy
            </span>
          </h1>
          <img
            className="bottle"
            src="/images/soyboy-bottle.webp"
            srcSet="/images/soyboy-bottle-1x.webp 228w, /images/soyboy-bottle.webp 456w"
            sizes="(min-width: 768px) 15vw, 30vw"
            width={456}
            height={1392}
            alt="A white Soyboy bottle with a pink cap and the word soyboy printed in magenta"
          />
        </div>

        <div className="mt-12 grid gap-8 md:mt-24 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Go on. Be a soyboy.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#waitlist" className="btn bg-magenta text-white hover:bg-berry">
                Join the waitlist
              </a>
              <a
                href="#drink"
                className="btn border-2 border-berry text-berry hover:bg-berry hover:text-milk"
              >
                What's in it
              </a>
            </div>
          </div>
          <p className="max-w-md text-lg md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            An artisanal soy drink made from organic soybeans and filtered spring water.
            Creamy, a little nutty, and best straight from the fridge. The name is a joke.
            The drink isn't.
          </p>
        </div>
      </div>
    </header>
  );
}
