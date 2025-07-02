import React from 'react'
import { assets } from '../../assets/picture/assets';

const CallAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0 text-center'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>
        Learn Anything, Anywhere
      </h1>
      <p className='text-gray-500 sm:text-sm max-w-xl'>
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam proident commodo deserunt.
      </p>

      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-8 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition'>
          Get Started
        </button>
        <button className='flex items-center gap-2 text-blue-600 hover:text-blue-800 transition'>
          Learn More
          <img src={assets.arrow_icon} alt='arrow_icon' className='w-4 h-4' />
        </button>
      </div>
    </div>
  )
}

export default CallAction;
