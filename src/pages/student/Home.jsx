import React from 'react'
import Hero from '../../components/student/Hero'
import Company from '../../components/student/Company'
import Coursessection from '../../components/student/Coursessection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallAction from '../../components/student/CallAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
    <Hero/>   
    <Company/>
    <Coursessection/>
    <TestimonialsSection/>
    <CallAction/>
    <Footer/>
    </div>
  )
}

export default Home