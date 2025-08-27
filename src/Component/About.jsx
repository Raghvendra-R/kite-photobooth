import React from 'react'
import brand_img from '../assets/brand_img.png'

const About = () => {
    return (
        <div
            className="flex flex-col items-center justify-center container mx-auto px-6 sm:px-10 md:px-20 lg:px-32 py-14 w-full overflow-hidden"
            id="About"
        >
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
                About <span className="underline underline-offset-4 decoration-2 font-light">Our Brand</span>
            </h1>
            <p className="text-gray-500 max-w-xl text-center mb-8 text-sm sm:text-base">
                Passionate About Properties, Dedicated to Your Vision
            </p>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
                {/* Image */}
                <img
                    src={brand_img}
                    alt="Brand"
                    className="w-full sm:w-3/4 md:w-1/2 max-w-lg rounded-lg shadow-md"
                />

                {/* Stats Section */}
                <div className="flex flex-col items-center md:items-start text-gray-600 w-full ">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10 w-full">

                        <div>
                            <p className="text-3xl sm:text-4xl font-semibold text-gray-800">10+</p>
                            <p className="text-sm sm:text-base">Years of Excellence</p>
                        </div>

                        <div>
                            <p className="text-3xl sm:text-4xl font-semibold text-gray-800">10+</p>
                            <p className="text-sm sm:text-base">Projects Completed</p>
                        </div>

                        <div>
                            <p className="text-3xl sm:text-4xl font-semibold text-gray-800">12+</p>
                            <p className="text-sm sm:text-base">Mn. Sq. Ft. Delivered</p>
                        </div>

                        <div>
                            <p className="text-3xl sm:text-4xl font-semibold text-gray-800">20+</p>
                            <p className="text-sm sm:text-base">Ongoing Projects</p>
                        </div>
                    </div>
<p className="my-10 max-w-lg text-gray-600 leading-relaxed">
  At <span className="font-semibold text-gray-800">Real Estate House</span>, we believe a home is more than just walls and a roof—it’s the foundation of your lifestyle, memories, and dreams.  

  With over a decade of experience in the real estate market, we specialize in buying, selling, and renting both residential and commercial properties. Whether you’re looking for your first home, a luxury estate, or a promising investment opportunity, our dedicated team is here to guide you every step of the way.  

  Our approach is built on trust, transparency, and personalized service, ensuring that your property journey is seamless and stress-free. Because finding the perfect space isn’t just about property—it’s about building your future.  
</p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>SEE MORE</button>
                </div>
            </div>
        </div>
    )
}

export default About
