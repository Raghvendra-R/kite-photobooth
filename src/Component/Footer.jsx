import React from 'react'
// import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left: Brand Info */}
        <div className="md:w-1/3">
          <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide 
            bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 
            bg-clip-text text-transparent drop-shadow-md"
          >
            REAL STATE HOUSE
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            We believe a home is more than just walls and a roof—it’s the foundation of your lifestyle, memories, and dreams.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="md:w-1/5">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li><a href="#Header" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right: Newsletter */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe To Our Newsletter</h3>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full sm:flex-1 p-2 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none"
            />
            <button className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 transition text-white w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © 2024 RDeveloperstack. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
