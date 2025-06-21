import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import AdminDashBoard from "./AdminDashBoard";
import UserDashBoard from "./UserDashBoard";
import EnrolledCourses from "./components/EnrolledCourses";
import Settings from "./components/Settings";
import Logout from "./components/Logout";

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
        <Route path="/dashboard/admin" element={<AdminDashBoard/>} />

        <Route path="/dashboard/user" element={<UserDashBoard/>}> 
           <Route path="courses" element={<EnrolledCourses />} />
           <Route path="settings" element={<Settings />} />
           <Route path="logout" element={<Logout />} />
        </Route>
        
        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
