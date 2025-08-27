import React, { useRef } from 'react'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'  
import { projectsData } from '../assets/assets'

const Project = () => {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Project <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>
      
      {/* Project slider container */}
      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="min-w-[280px] max-w-[280px] bg-white  shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Fixed Image Height */}
           <div className="w-full h-55 bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info always below image */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              <p className="text-gray-700 font-medium mb-1">₹{project.price}</p>
              <p className="flex items-center text-gray-500 text-sm">
                <MapPin size={16} className="mr-1" />
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider navigation buttons */}
      <div className='flex justify-center items-center gap-4 mt-8'>
        <button
          onClick={scrollLeft}
          className='p-3 bg-gray-200 hover:bg-black hover:text-white rounded-full shadow transition'
          aria-label='Previous Project'
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={scrollRight}
          className='p-3 bg-gray-200 hover:bg-black hover:text-white rounded-full shadow transition'
          aria-label='Next Project'
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default Project
