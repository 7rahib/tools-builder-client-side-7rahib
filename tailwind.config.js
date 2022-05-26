module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/image/hero.jpg')",
        'profile': "url(https://i.ibb.co/XyJPbhs/profile.jpg)"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ea79b0",
          "secondary": "#f3ffb2",
          "accent": "#9dbf09",
          "neutral": "#1F1A23",
          "base-100": "#292E51",
          "info": "#5A74F6",
          "success": "#1BBB5B",
          "warning": "#CD7A13",
          "error": "#F04328",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
