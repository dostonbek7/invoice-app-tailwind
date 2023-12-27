/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '400px',
      'md': '768px',
      'lg': '992px',
    },
    fontFamily:{
      sans: ['League Spartan', 'sans-serif']
    },
    extend: {
      colors:{
        'darks-lite-blue': '#7C5DFA',
        'periwinkle':'#9277FF',
        'kon-color':'#1E2139',
        'royal-cursty':'#252945',
        'stoic-white':'#DFE3FA',
        'popilio-argious':'#888EB0',
        'true-lavender':'#7E88C3',
        'khmer-curry':'#0C0E16',
        'pearl-white':'#F8F8FB',
        'river-styx':'#141625',
        'carbon-blue':'#373B53',
        'frozen-state':'#858BB2',
        'dark-shamrock':'#33D69F',
        'everlasting-ice':'#F3FCF9',
        'wash-me':'#F9FAFE',
      },
      backgroundImage:{
        'logo-bg':"url('./assets/bg-logo.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
