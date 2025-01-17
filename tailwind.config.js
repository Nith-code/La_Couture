/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#fdfdfd",
          200: "#808779",
          300: "rgba(0, 0, 0, 0.25)",
        },
        "background-default-default": "#fff",
        darkseagreen: {
          100: "#8fae76",
          200: "rgba(143, 174, 118, 0.83)",
          300: "rgba(143, 174, 118, 0.73)",
        },
        darkolivegreen: {
          100: "#5c7a42",
          200: "rgba(92, 122, 66, 0.83)",
          300: "rgba(92, 122, 66, 0.73)",
        },
        sandybrown: "#e6b669",
        snow: "#fdf6f6",
        dimgray: "#5f6c52",
        "border-default-default": "#d9d9d9",
        "grays-black": "#000",
        floralwhite: "#fffcf6",
        darkslategray: "rgba(51, 51, 51, 0.25)",
        darkgray: "#b3b3b3",
        gray1: "#020202",
        limegreen: "#0cca4a",
      },
      spacing: {
        "space-400": "16px",
        "space-300": "12px",
      },
      fontFamily: {
        "inria-serif": "'Inria Serif'",
        "display-sm-semibold": "Inter",
        "inria-sans": "'Inria Sans'",
        "josefin-slab": "'Josefin Slab'",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "26xl": "45px",
        "21xl": "40px",
        "radius-200": "8px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      "21xl": "40px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
