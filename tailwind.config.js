/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shadeBlack: "#212121",
      },
      boxShadow: {
        primaryBtnShadow: "4px 8px 19px -3px rgba(0, 0, 0, 0.27)",
        neumorphismHvr: "8px 8px 21px #bcbdc1, -8px -8px 21px #ffffff",
        neumorphism: "5px 5px 9px #ced0d4, -5px -5px 9px #fcfeff",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212121",

          secondary: "#212121",
          // primary: "#1d4ed8",

          // secondary: "#3b82f6",

          accent: "#059669",

          neutral: "#1f2937",

          "base-100": "#e5e7eb",

          info: "#4338ca",

          success: "#16a34a",

          warning: "#eab308",

          error: "#be123c",
          "--rounded-box": "0.7rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.8s", // duration of animation when you click on button
          "--min-height-btn": "2.6rem", // duration of animation when you click on button
          "--height-btn": "2.6rem", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
