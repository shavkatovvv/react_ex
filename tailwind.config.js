/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                width: 1600,
                lg: 1400,
            },
            colors: {
                grayGreen: "#274C5B",
                green: "#7EB693",
                yellow: "#efd372",
                gray: "#D4D4D4",
                whiteGray: "#F9F8F8",
                opGreen: "#EFF6F1",
                opBlack: "#525C60",
                title: "#274c5b",
                pT: "#525c60",
                inp: "#fafafa",
            },
            fontSize: {
                h1Title: "70px",
                h2Title: "50px",
                h3Title: "40px",
                h4Title: "35px",
                h5Title: "30px",
                h6Title: "25px",
                p: "18px",
            },

            fontWeight: {
                main: "800",
                p: "400",
            },

            lineHeight: {
                p: "165%",
            },

            fontFamily: {
                Yellowtail: ["Yellowtail", "sans-serif"],
            },
        },
    },
    plugins: [],
};
