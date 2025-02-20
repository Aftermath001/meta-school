export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-red-500", "text-white"], // Prevent styles from being removed
  theme: {
    extend: {},
  },
  plugins: [],
}
