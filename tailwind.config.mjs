/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
      },
      animation: {
        typing: 'typing 2s steps(20, end) forwards',
        blink: 'blink 0.7s step-end infinite',
      },
      
    },
  },
  plugins: [],
};
