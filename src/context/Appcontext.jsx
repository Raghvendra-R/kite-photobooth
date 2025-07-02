import { createContext, useEffect, useState, } from "react";
import { dummyCourses } from "../assets/picture/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const [allCourses, setAllCoursese] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses]=useState(true)
        
    //fetch all courses
    
    const fetchAllCourses = async () => {
        setAllCoursese(dummyCourses)
    }

    // Function t calculate average rating of course

    const calculateRating = (course) => {
        if (!course?.courseRatings || course.courseRatings.length === 0) {
            return 0;
        }

        let totalRating = 0;

        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        });

        return totalRating / course.courseRatings.length;
    };

    // function calculate course chapter Time

    const calculateChapterTime = (chapter) => {
        let time = 0
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
    }

    // function calculate course chapter Duration

    const calculateCourseDuration = (course) => {
        let time = 0
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration
        ))
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
    }


    // function calculate  to no  of lecture in the course

    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length
            }
        });
        return totalLectures
    }

      
    //fetch user Enrolled Courses

    const fetchUserEnrolledCourses = async ()=>{
            setEnrolledCourses(dummyCourses)
    }

console.log('enrolledCourses:', enrolledCourses);
    useEffect(() => {
        fetchAllCourses()
        fetchUserEnrolledCourses()
    }, [])

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator,enrolledCourses,
        fetchUserEnrolledCourses,setIsEducator, calculateChapterTime, calculateNoOfLectures, calculateCourseDuration
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}