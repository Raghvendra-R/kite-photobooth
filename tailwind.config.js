// tailwind.config.js
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'course-deatils-heading-small': ['26px', '36px'],
        'course-deatils-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],
        default: ['15px', '21px'],
      },
      gridTemplateColumns: {  // ✅ Fixed spelling
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',  // ✅ Fixed unit
      },
      spacing: {
        'section-height': '500px',
      }
    },
  },
  plugins: [],
}
