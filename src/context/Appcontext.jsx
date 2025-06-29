import { createContext, useEffect, useState, } from "react";
import { dummyCourses } from "../assets/picture/assets";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()
    const [allCourses,setAllCoursese]=useState([])
    const [isEducator,setIsEducator]=useState(true)

    //fetch all courses
    const fetchAllCourses=async()=>{
        setAllCoursese(dummyCourses)
    }

     // Function t calculate average rating of course

<<<<<<< HEAD
     const calculateRating=(course)=>{
        if(!course?.courseRating || course.courseRating.length === 0){
            return 0;
        }
        let totalRating = 0;

        course.courseRatings.forEAch(rating=>{
            totalRating += rating.rating
        })
        return totalRating/course.courseRatings.length
     }
=======
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
    
>>>>>>> c8b285366c3bee5ebe194fcf6bf3cc4a7ce6539c


    useEffect(()=>{
        fetchAllCourses()
    },[])

    const value={
        currency,allCourses,navigate,calculateRating,isEducator,
        setIsEducator
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}