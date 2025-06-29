import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/Appcontext';
import CourseCard from './CourseCard';

const Coursessection = () => {

  const { allCourses } = useContext(AppContext);

  return (
    <div className='px-4 md:px-0 my-10 md:my-16'>
      <h2 className="text-3xl font-medium text-gray-800">Learn from the best</h2>
      <p className="md:text-base text-sm text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding and design to <br /> 
        business and wellness, our courses are crafted to deliver results.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
        {allCourses.slice(0, 4).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      <Link 
        to={'/course-list'} 
        onClick={() => window.scrollTo(0, 0)} 
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:shadow-md transition-shadow duration-200'
      >
        Show All Courses
      </Link>
    </div>
  )
}

export default Coursessection;
