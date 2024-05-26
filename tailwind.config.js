/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 15px 35px 0 rgba(86, 59, 255, 0.26)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #a93bff 0%, #8834ff 100%)",
      },
    },
  },
  plugins: [],
};
