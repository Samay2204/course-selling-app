import { Outlet, NavLink } from "react-router-dom";

//The sidebar and navbar remains constant, only the text content area is being changed according to buttons pressed.
//This works because of "React Router’s Nested Routing" and "layout component reuse".
//Layout Component is UserDashboard, sidebar is put in it, used <Outlet/> for changing part
//The changing part is nested within the dashboard component, 
// When the URL changes (e.g., /cart, /settings), only the content inside <Outlet /> changes — not the sidebar or navbar.


export default function UserDashBoard() {

  const navLinkClasses = ({ isActive }) =>
  isActive
    ? "bg-violet-800 text-white px-6 py-2 rounded "
    : "bg-violet-600 hover:bg-violet-700 text-white px-2 py-2 rounded";

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-60 bg-violet-600 text-white p-6 space-y-6">
        <div className="text-2xl font-bold">LearnHUB</div>
        <nav className="space-y-4">
          <div className="font-semibold">My Profile</div>
          <div className="flex flex-col space-y-2">
            <NavLink
              to="courses"
              className={navLinkClasses}
            >
              Enrolled Courses
            </NavLink>

            <NavLink
              to="settings"
              className={navLinkClasses}
            >
              Settings
            </NavLink>

            <NavLink
              to="logout"
              className={navLinkClasses}
            >
              Logout
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <nav className="bg-white text-black flex justify-between items-center px-8 py-4">
          <div className="space-x-6">
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
