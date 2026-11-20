import { FormEvent, useState } from 'react';

// Placeholder: there is no backend. Submitting opens the visitor's email app with a
// pre-filled note to this address. Swap in a real list (or create this mailbox) before launch.
const WAITLIST_EMAIL = 'hello@drinksoyboy.com';

export function Waitlist() {
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent('Soyboy waitlist');
    const body = encodeURIComponent(`Add me to the Soyboy waitlist: ${email}`);
    window.location.href = `mailto:${WAITLIST_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="on-dark bg-magenta text-white"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:px-8 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <h2
            id="waitlist-title"
            className="font-display text-6xl leading-[0.9] sm:text-7xl lg:text-8xl"
          >
            Not in stores yet.
          </h2>
          <p className="mt-6 max-w-md text-lg">
            Leave your email and we'll tell you where the first bottles show up.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="self-end md:col-span-5">
          <label htmlFor="waitlist-email" className="block font-semibold">
            Email address
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
            <input
              id="waitlist-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="min-h-[3rem] min-w-0 flex-1 rounded-full border-2 border-white bg-white px-5 text-berry placeholder:text-berry/60 focus-visible:outline-milk"
            />
            <button type="submit" className="btn whitespace-nowrap bg-berry text-milk hover:bg-white hover:text-berry">
              Join the waitlist
            </button>
          </div>
          <p className="mt-3 text-sm text-white/90">
            This opens your email app with a short note to {WAITLIST_EMAIL}. Nothing is stored
            on this site.
          </p>
        </form>
      </div>
    </section>
  );
}
