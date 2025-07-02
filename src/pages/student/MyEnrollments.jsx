import React, { useContext } from 'react'
import { AppContext } from '../../context/Appcontext' // Import your context

const MyEnrollments = () => {
    const { enrolledCourses, calculateCourseDuration } = useContext(AppContext)
    


    return (
      <>
        <div className='md:px-36 px-8 pt-10'>
            <h1 className='text-2xl font-semibold mb-6'>My Enrollments</h1>

            <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
                <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
                    <tr>
                        <th className='px-4 py-3 font-semibold truncate'>Course</th>
                        <th className='px-4 py-3 font-semibold truncate'>Duration</th>
                        <th className='px-4 py-3 font-semibold truncate'>Completed</th>
                        <th className='px-4 py-3 font-semibold truncate'>Status</th>
                    </tr>
                </thead>

                <tbody className='text-gray-700'>
                    {enrolledCourses.map((course, index) => (
                        <tr key={index} className='border-b border-gray-300/20'>
                            <td className='px-4 py-4 flex items-center gap-4'>
                                <img src={course.courseThumbnail} alt={course.courseTitle} className='w-20 h-14 object-cover rounded' />
                                <div>
                                    <p className='font-medium text-gray-800'>{course.courseTitle}</p>
                                </div>
                            </td>
                            <td className='px-4 py-4'>
                                {calculateCourseDuration(course)}
                            </td>
                            <td className='px-4 py-4'>
                                4/10 <span className='text-gray-500'>Lectures</span>
                            </td>
                            <td className='px-4 py-4'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded'>
                                    On Going
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default MyEnrollments
