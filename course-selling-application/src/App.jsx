import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import AdminDashBoard from "./AdminDashBoard";
import UserDashBoard from "./UserDashBoard";
import EnrolledCourses from "./components/EnrolledCourses";
import Students from "./components/Students";
import Settings from "./components/Settings";
import Logout from "./components/Logout";
import Browse from "./components/Browse";
import Courses from "./components/Courses";
import BrowseCourses from "./components/BrowseCourses";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  console.log("App loaded ✅");


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/browsecourses" element={<BrowseCourses/>} />

        <Route path="/dashboard/admin" element={<AdminDashBoard/>} >
           <Route path="courses" element={<Courses />} />
           <Route path="settings" element={<Settings />} />
           <Route path="students" element={<Students />} />
        </Route>


        <Route path="/dashboard/user" element={<UserDashBoard/>}> 
           <Route path="courses" element={<EnrolledCourses />} />
           <Route path="browse" element={<Browse />} />
           <Route path="logout" element={<Logout />} />
        </Route>
        
        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
