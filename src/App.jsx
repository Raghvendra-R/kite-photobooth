import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import Project from './Component/Project'
import Testimonial from './Component/Testimonial'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden' id='nevbar'>
      <Header/>
      <About/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App