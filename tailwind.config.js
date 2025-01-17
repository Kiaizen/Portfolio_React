export default  {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Kalnia',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        bgprimary: '#2F006B',
        bgsecondary: '#220B41',
        bgtertiary: '#7840C0',
        bgquaternary: '#A875EB'
      },
    },
  },
  plugins: [],
};
