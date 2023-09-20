/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{html, css, js}"],
  theme: {
    extend: {
      animation: {
        text: "text 3s ease infinite",
        radical: "bgRadical .56s cubic-bezier(.8,0,.2,1) infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },

        bgRadical: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
            "transform": "rotate(0deg)",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
            "transform": "rotate(180deg)",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "right center",
            "transform": "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
