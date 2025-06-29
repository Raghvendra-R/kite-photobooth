// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],

      },
      fontSize:{
        'course-deatils-heading-small':['26px','36px'],
        'course-deatils-heading-small':['36px','44px'],
        'home-heading-small':['28px','34px'],
        'home-heading-large':['48px','56px'],    
        default: ['15px', '21px'],    
      }
    },
  },
  plugins: [],
}
