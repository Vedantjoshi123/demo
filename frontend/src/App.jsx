import './App.css'
import {Route,Routes, useMatch} from 'react-router-dom'
import Home from './pages/Student/Home'
import CoursesList from './pages/Student/CoursesList'
import MyEnrollments from './pages/Student/MyEnrollments';
import CourseDetails from './pages/Student/CourseDetails';
import Player from './pages/Student/Player';
// import {  } from "module";
import Loading from './components/Student/Loading';
import Dashboard from './pages/Teacher/Dashboard';
import AddCourse from './pages/Teacher/AddCourse';
import MyCourses from './pages/Teacher/MyCourses';
import StudentsEnrolled from './pages/Teacher/StudentsEnrolled';
import Navbar from './components/Student/Navbar'


function App() {
  const isTeacherRoute = useMatch('/teacher/*')

  return (
<div className="text-default min-h-screen bg-[var(--color-bg)] transition-colors duration-300">

      {!isTeacherRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course-list/:input' element={<CoursesList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/educator' element={<Dashboard/>}>
              <Route path='add-course' element={<AddCourse/>}/>
              <Route path='my-courses' element={<MyCourses/>}/>
              <Route path='student-enrolled' element={<  StudentsEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App