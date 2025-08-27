import React, { useState } from "react"
import { Menu, X } from "lucide-react" // icons (hamburger & close)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-40 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        
        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide 
                       bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 
                       bg-clip-text text-transparent drop-shadow-md">
          REAL STATE HOUSE
        </h1>

        {/* Desktop + Tablet Nav Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-white font-medium">
          <a href="#Header" className="cursor-pointer hover:text-blue-400 transition">HOME</a>
          <a href="#About" className="cursor-pointer hover:text-blue-400 transition">ABOUT</a>
          <a href="#Projects" className="cursor-pointer hover:text-blue-400 transition">PROJECTS</a>
          <a href="#testimonials" className="cursor-pointer hover:text-blue-400 transition uppercase">Testimonials</a>
          <a href="#contact" className="cursor-pointer hover:text-blue-400 transition uppercase">Contact Us</a>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black font-semibold px-6 lg:px-8 py-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger (below md) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (below md) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 text-white px-6 py-6 space-y-6 text-center">
          <a href="#Header" className="block hover:text-blue-400 transition">HOME</a>
          <a href="#About" className="block hover:text-blue-400 transition">ABOUT</a>
          <a href="#Projects" className="block hover:text-blue-400 transition">PROJECTS</a>
          <a href="#testimonials" className="block hover:text-blue-400 transition">TESTIMONIALS</a>
          <a href="#contact" className="block hover:text-blue-400 transition">CONTACT US</a>

          <button className="w-full bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
