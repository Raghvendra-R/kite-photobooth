import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CourseList from './pages/student/CourseList';
import CourseDeatile from './pages/student/CourseDeatile';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import AddCourse from './pages/educator/AddCourse';
import MyCourse from './pages/educator/MyCourse';
import StudentEnrolled from './pages/educator/StudentEnrolled';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/DashBoard';
import Navbar from './components/student/Navbar';

const App = () => {
  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white'>
      {/* Show Navbar only if not on Educator Route */}
      {!isEducatorRoute && <Navbar />}

      <Routes>
        {/* Student Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/course/:id' element={<CourseDeatile />} />
        <Route path='/course-list/' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        {/* Educator Routes */}
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourse />} />
          <Route path='student-enrolled' element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
