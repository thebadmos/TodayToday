module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      colors: {
        primary: "#F4C263",
        secondary: "#F9B331",
        black: "#121212",
        tertiary:"#077C6B",
        white: "#FFFFFF",
        yellow: "#FFF62C",
        

        BACKGROUND_GRAY: "#E5E5E5",
        BACKGROUND_WHITE: "#FFFFFF",
        BACKGROUND_TERTIARY: "#ECECEC",
        BACKGROUND_GREEN: "#077C6B",
        BACKGROUND_YELLOW: "#FFF62C",

        GREEN: {
          _100: "#077C6B"
        },
        BLACK: {
          _100: "#15452F"
        },

        BLUE: {
          _100: "#C4D6ED",
          _200: "#1574F6",
          _300: "#2242F8"
        },

        BLACK: {
          _100: "#071827",
          _200: "#040442",
          _300: "#5C6F7F"
        },

        YELLOW: {
          
      },

        RED: {
          _100: "#E02020"
        },

        NEUTRAL: {},
      },

      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        poppins: ['Poppins', "sans-serif"]
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      boxShadow: {
        projects: "0px 0px 10px rgba(0, 0, 0, 0.06)"
      }
    },
  },
  plugins: [],
}
