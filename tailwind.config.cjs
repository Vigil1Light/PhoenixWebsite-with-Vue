/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeGreyText1: "#333333",
      },
      fontFamily: {
        normal_font: ['"PingFang SC"'],
      },
      boxShadow: {
        normal: "0px 1px 0px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        banner_1: "url('../../src/assets/banner_1.png')",
        banner_2: "url('../../src/assets/banner_2.png')",
        banner_3: "url('../../src/assets/banner_3.png')",
      },
      boxShadow: {
        btn1: "-6px 8px 4px 0px rgba(240, 33, 72, 0.25)",
      },
    },
  },
  plugins: [],
};
