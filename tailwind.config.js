import typography from '@tailwindcss/typography';
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        conthraxx: ['Conthraxx', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
