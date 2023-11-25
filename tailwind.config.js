/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "blur": "url(./blur.png)"
      }
    },
  },
  plugins: [],
}

