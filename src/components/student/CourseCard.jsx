import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/picture/assets';

const CourseCard = ({ course }) => {

    const { currency, calculateRating } = useContext(AppContext);
    const rating = calculateRating(course);

    return (
        <Link 
            onClick={() => window.scrollTo(0, 0)} 
            to={'/course/' + course._id} 
            className="border border-gray-500/30 pb-6 overflow-hidden rounded-2xl hover:shadow-md transition-shadow duration-200"
        >
            <img 
                className="w-full h-48 object-cover rounded-t-2xl" 
                src={course.courseThumbnail} 
                alt={course.courseTitle || 'Course Thumbnail'} 
            />
            <div className="p-3 text-left">
                <h3 className="text-base font-semibold">{course.courseTitle}</h3>
                <p className="text-gray-500">{course.educator.name}</p>
                <div className="flex items-center space-x-2">
                    <p>{calculateRating(course)}</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                className="w-3.5 h-3.5"
                                src={i < Math.floor(rating) ? assets.star : assets.star_blank}
                                alt={i < Math.floor(rating) ? 'filled star' : 'empty star'}
                            />
                        ))}
                    </div>
                    <p className="text-gray-500">
                        ({course.courseRatings?.length || 0})
                    </p>
                </div>
                <p className="text-base font-semibold text-gray-800">
                    {currency}
                    {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
                </p>
            </div>
        </Link>
    )
}

export default CourseCard;
