import React from 'react'
import { assets } from './../../assets/picture/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className=' '>
     <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower Your Futuru With The Courses Designed to
      <span className='text-blue-600'>Fit Your Choice </span>
      <img src={assets.sketch} alt=" " className=' md: block hidden absolute -bottom-7 right-0'/></h1>
   
    <p className=' md:block hidden text-gray-500 max-w-2xl mx-auto'>we bging together world-class instructors intreactive 
                             We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.

      </p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
            We bring together world-class instructors to help you achieve your professional goals.

      </p>
      <SearchBar/>
    </div>
  )
}

export default Hero
