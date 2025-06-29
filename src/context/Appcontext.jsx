import { createContext, useEffect, useState, } from "react";
import { dummyCourses } from "../assets/picture/assets";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()
    const [allCourses,setAllCoursese]=useState([])

    //fetch all courses
    const fetchAllCourses=async()=>{
        setAllCoursese(dummyCourses)
    }

     // Function t calculate average rating of course

     const calculateRating=(course)=>{
        if(course.courseRating.length===0){
            return 0;
        }
        let totalRating=0;
        course.courseRatings.forEAch(rating=>{
            totalRating += rating.rating
        })
        return totalRating/course.courseRatings.length
     }


    useEffect(()=>{
        fetchAllCourses()
    },[])

    const value={
        currency,allCourses,navigate,calculateRating
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}