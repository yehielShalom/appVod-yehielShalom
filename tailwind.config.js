/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),  require('flowbite/plugin')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
