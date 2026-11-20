/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        milk: '#F6CFE0', // pink milk, sampled from the fruit photography
        blush: '#FFF6FA', // pink-tinted white
        label: '#E8326E', // the magenta from the bottle label (display type only)
        magenta: '#C9184F', // darker label magenta for text-bearing surfaces
        berry: '#1B2152', // blueberry ink
        strawberry: '#D3302B',
        banana: '#FFD95C',
      },
      fontFamily: {
        display: ['"Bagel Fat One"', 'system-ui', 'sans-serif'],
        sans: ['"Schibsted Grotesk Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
