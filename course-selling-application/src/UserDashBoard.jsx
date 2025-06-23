import { Outlet, NavLink } from "react-router-dom";

//The sidebar and navbar remains constant, only the text content area is being changed according to buttons pressed.
//This works because of "React Router’s Nested Routing" and "layout component reuse".
//Layout Component is UserDashboard, sidebar is put in it, used <Outlet/> for changing part
//The changing part is nested within the dashboard component, 
// When the URL changes (e.g., /cart, /settings), only the content inside <Outlet /> changes — not the sidebar or navbar.


export default function UserDashBoard() {

  const navLinkClasses = ({ isActive }) =>
  isActive
    ? "bg-indigo-700 text-white font-bold px-6 py-4"
    : "bg-indigo-800 hover:bg-indigo-900 text-indigo-100 px-2 py-4 cursor-pointer";

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-60 bg-indigo-800 text-white py-6 space-y-8">
        <div className="text-2xl font-bold text-center">LearnHUB</div>
  
  <nav className="flex flex-col ">
    <NavLink to="/dashboard/user" className={navLinkClasses} end>
      My Profile
    </NavLink>
    
    <NavLink to="/dashboard/user/courses" className={navLinkClasses}>
      Enrolled Courses
    </NavLink>
    
    <NavLink to="/dashboard/user/settings" className={navLinkClasses}>
      Settings
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
            <a href="#" className="hover:text-indigo-300 cursor-pointer">
              Catalog
            </a>
            <a href="#" className="hover:text-indigo-300 cursor-pointer">
              About Us
            </a>
            <a href="#" className="hover:text-indigo-300 cursor-pointer">
              Contact Us
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xl">🛒</div>
            <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              RP
            </div>
          </div>
        </nav>

        {/* Outlet: Page-specific content */}
         <main className="p-10">
          <Outlet />
        </main> 
      </div>
    </div>
  );
}
