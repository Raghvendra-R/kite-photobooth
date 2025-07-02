import React from 'react'
import { assets } from '../../assets/picture/assets'

const Footer = () => {
    return (
        <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
            <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

                {/* Logo and Description */}
                <div className="flex flex-col md:items-start items-center w-full md:w-auto max-w-md">
                    <img src={assets.logo_dark} alt="logo" />
                    <p className="mt-6 text-center md:text-left text-sm text-white/80">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                </div>

                {/* Company Links */}
                <div className="flex flex-col md:items-start items-center w-full md:w-auto">
                    <h2 className="font-semibold text-white mb-5">Company</h2>
                    <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter Section - Now Visible on Mobile */}
                <div className="flex flex-col items-start w-full md:w-auto">
<div className="flex justify-center w-full">
  <h2 className="font-semibold text-white mb-5 text-center w-full max-w-xs">
    Subscribe to our newsletter
  </h2>
</div>
                    <div className="flex justify-center w-full">
                        <p className="text-sm text-white/80 text-center max-w-xs">
                            The latest news, articles, and resources, <br />
                            sent to your inbox weekly.
                        </p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-2 pt-4 w-full">
                        <input
                            className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <p className="py-4 text-center text-xs md:text-sm text-white/60">
                © 2024 RAJ_LMS. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer
