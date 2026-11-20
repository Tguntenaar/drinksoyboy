export function Footer() {
  return (
    <footer className="on-dark overflow-hidden bg-berry text-milk">
      <div className="mx-auto max-w-[1440px] px-4 pt-14 sm:px-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            <li><a className="underline-offset-4 hover:underline" href="#drink">The drink</a></li>
            <li><a className="underline-offset-4 hover:underline" href="#flavors">Flavors</a></li>
            <li><a className="underline-offset-4 hover:underline" href="#gallery">Gallery</a></li>
            <li><a className="underline-offset-4 hover:underline" href="#waitlist">Waitlist</a></li>
          </ul>
        </nav>
        <p className="mt-6 text-sm text-milk/80">© 2026 Drink Soyboy. drinksoyboy.com</p>
        <p
          aria-hidden="true"
          className="mt-10 select-none whitespace-nowrap font-display leading-[0.9] text-label"
          style={{ fontSize: 'clamp(5rem, 26vw, 24rem)', marginBottom: '0.05em' }}
        >
          soyboy
        </p>
      </div>
    </footer>
  );
}
