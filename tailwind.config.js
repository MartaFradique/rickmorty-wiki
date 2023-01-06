/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      height: {
        200: "80vh",
        150: "75vh",
        50: "25vh",
        500: "45vh",
        10: "7vh",
      },

      width: {
        100: "50vh",
        120: "47vh",
        50: "50vh",
        45: "30vh",
        40: "25vh",
        10: "15vh",
        700: "80vh",
        650: "78vh",
      },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      coco: "#555a51",
      coco2: "#0E2815",
      coco3: "#56515a",
      ovo: "#EBEBE2",
      verdits: "#39D247",
      verdits2: "#328132",
      verdits3: "#1B3B20",
      red: "#FF0000",
      cin: "#f3f4f6",
      beig: "#f5f5dc",
    },
  },
};
