import { useEffect,useState } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";


//The sidebar and navbar remains constant, only the text content area is being changed according to buttons pressed.
//This works because of "React Router’s Nested Routing" and "layout component reuse".
//Layout Component is UserDashboard, sidebar is put in it, used <Outlet/> for changing part
//The changing part is nested within the dashboard component, 
// When the URL changes (e.g., /cart, /settings), only the content inside <Outlet /> changes — not the sidebar or navbar.


export default function UserDashBoard() {

  const [userData,setUserData] = useState(null);

  const token = localStorage.getItem("token");

  const location = useLocation();
  const isOnUserDashBoard = location.pathname === "/dashboard/user";

 

  
      useEffect(()=>{

        const fetchData = async ()=> {

            const res = await fetch("/api/user/dashboard",{
            headers: { "Authorization": token}
          });

          const data = await res.json();

          if(res.ok){
              setUserData(data);
          }else {
                   console.error("Failed to load dashboard:", data.message);
                   setUserData(null);
                }
        };

        
          fetchData();


  }, []);
  
  
  
  const navLinkClasses = ({ isActive }) =>
  isActive
    ? "bg-indigo-700 text-white font-bold px-6 py-4"
    : "bg-indigo-800 hover:bg-indigo-900 text-indigo-100 px-2 py-4 cursor-pointer";

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-70 bg-indigo-800 text-white py-6 space-y-8">
        <div className="text-2xl font-bold text-center">LearnHUB</div>
  
  <nav className="flex flex-col ">
    <NavLink to="/dashboard/user" className={navLinkClasses} end>
      My Profile
    </NavLink>
    
    <NavLink to="/dashboard/user/courses" className={navLinkClasses}>
      Enrolled Courses
    </NavLink>
    
    <NavLink to="/dashboard/user/browse" className={navLinkClasses}>
      Browse Courses
    </NavLink>
    
    <NavLink to="/dashboard/user/logout" className={navLinkClasses}>
      Logout
    </NavLink>
  </nav>
</aside>


      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <nav className="bg-white text-black flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 z-10">
          <div className="font-bold space-x-10 ">

            <a href="#" className="hover:text-indigo-300 cursor-pointer">
              Home
            </a>

            <Link to="/browsecourses">
            <button className="hover:text-indigo-300 cursor-pointer">
              Browse Courses
            </button>
            </Link>

            <a href="#" className="hover:text-indigo-300 cursor-pointer">
              About Us
            </a>
            <a href="#" className="hover:text-indigo-300 cursor-pointer">
              Contact Us
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xl">🛒</div>
            <div className="bg-violet-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              {userData?.firstName?.charAt(0).toUpperCase()}{userData?.lastName?.charAt(0).toUpperCase()}
            </div>
          </div>
        </nav>

        {/* Outlet: Page-specific content */}
         <main className="p-10">
         
  


    { isOnUserDashBoard && (<div>
      <h1 className="text-3xl font-semibold mb-8">My Profile</h1>

    {/* Profile Header */}
    <div className="bg-violet-100 p-6 rounded-lg flex items-center justify-between mb-8 shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="bg-violet-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
           {userData?.firstName?.charAt(0).toUpperCase()}{userData?.lastName?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{userData?.firstName} {userData?.lastName}</h2>
          <p className="text-indigo-800">{userData?.email}</p>
        </div>
      </div>
      <button className="bg-violet-800 hover:bg-violet-500 text-white px-4 py-2 rounded-full font-semibold">
        Edit 
      </button>
    </div>

    {/* About Section */}
    <div className="bg-violet-100 p-6 rounded-lg mb-8 flex justify-between items-start shadow-lg">
      <div>
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-indigo-800">Write Something About Yourself</p>
      </div>
      <button className="bg-violet-800 hover:bg-violet-500 text-white px-4 py-2 rounded-full font-semibold">
        Edit 
      </button>
    </div>

    {/* Personal Details */}
    <div className="bg-violet-100 p-6 rounded-lg flex justify-between items-start shadow-lg">
      <div>
        <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
        <div className="grid grid-cols-2 gap-8 text-sm text-indigo-100">
          <div>
            <p className="text-indigo-800">First Name</p>
            <p>rdrdr</p>
          </div>
          <div>
            <p className="text-indigo-800">Last Name</p>
            <p>pkkokpp</p>
          </div>
        </div>
      </div>
      <button className="bg-violet-800 hover:bg-violet-500 text-white px-4 py-2 rounded-full font-semibold">
        Edit 
      </button>
    </div>
  </div>
  
  ) }
    

          <Outlet />
        </main> 
      </div>
    </div>
  );
}
