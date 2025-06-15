import { Outlet, NavLink } from "react-router-dom";

export default function UserDashBoard() {
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
              className="bg-violet-600 hover:bg-violet-800 px-4 py-2 rounded"
            >
              Enrolled Courses
            </NavLink>
            <NavLink
              to="cart"
              className="bg-violet-600 hover:bg-violet-800 px-4 py-2 rounded"
            >
              Cart
            </NavLink>
            <NavLink
              to="settings"
              className="bg-violet-600 hover:bg-violet-800 px-4 py-2 rounded"
            >
              Settings
            </NavLink>
            <NavLink
              to="logout"
              className="bg-violet-600 hover:bg-violet-800 px-4 py-2 rounded"
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
