import { useState,useEffect } from "react";
import { Outlet, NavLink, useLocation,useNavigate} from "react-router-dom";


export default function AdminDashBoard(){

  console.log("AdminDashBoard loaded" );
  const [course,setCourse] = useState(false);
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const isOnAdminDashBoard = location.pathname === "/dashboard/admin";
  const navigate = useNavigate();


  const token = localStorage.getItem("token"); 
  useEffect(() => {
      console.log("Component mounted");
      

      const fetchData = async ()=>{
            
              console.log("Token being sent:", token);

             

      
        const res = await fetch("/api/admin/dashboard", {
            headers: {
              "Authorization": token,
            }
          })

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

const [formData,setFormdata] = useState({
                        title: '',
                        description: '',
                        imageUrl: '',
                        price: '',             
                                       })

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;

setFormdata((prev) => ({
      ...prev,
      [name] : name === "price" ? Number(value) : value,
    }));

};

const handleSubmit = async (e)=> {
        e.preventDefault();
  try{

      const response = await fetch(`/api/admin/course`,{
        method: `POST`,
        headers: { 'Content-Type': 'application/json', 'Authorization': token, },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      console.log(res);

      setFormdata({ title: "", description: "", imageUrl: "", price: 0 });

      
   navigate("/dashboard/admin/courses");


  }catch(err){
       alert("Error in creating course" + err);
       console.log(err);
       
  }
}




  const navLinkClasses = ({ isActive }) =>
  isActive
    ? "bg-indigo-700 text-white font-bold px-6 py-4"
    : "bg-indigo-800 hover:bg-indigo-900 text-indigo-100 px-2 py-4 cursor-pointer";


     if (!userData) {
    return <p>Loading dashboard...</p>;
  }
  
   return(

<div class="flex h-screen bg-gray-50">
   {/* Sidebar */}
      <aside className="w-70 bg-indigo-800 text-white py-6 space-y-8">
        <div className="text-2xl font-bold text-center">LearnHUB</div>
  
  <nav className="flex flex-col ">
    <NavLink to="/dashboard/admin" className={navLinkClasses} end>
      Dashboard
    </NavLink>
    
    <NavLink to="/dashboard/admin/courses" className={navLinkClasses}>
      Courses
    </NavLink>
    
    <NavLink to="/dashboard/admin/students" className={navLinkClasses}>
      Students
    </NavLink>
    
    <NavLink to="/dashboard/admin/settings" className={navLinkClasses}>
      Settings
    </NavLink>
  </nav>
</aside>


  {/* <!-- Main Content --> */}
  <div class="flex-1 overflow-y-auto bg-gray-50">
    
    {/* <!-- Header --> */}
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <div class="flex justify-between items-center px-6 py-3">
        <div class="flex items-center">
          
          <h1 class="ml-3 text-xl font-semibold text-gray-800">LearnHUB</h1>
        </div>
        <div class="flex items-center space-x-6">
          <div class="text-gray-600">
            <span className="mr-2">
              {new Date().toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div class="flex items-center">
            <img src="" alt="Profile" class="h-10 w-10 rounded-full object-cover" />
            <div class="ml-3">
               <p class="text-sm font-medium text-gray-800">{userData.firstName} {userData.lastName}</p> 
             </div>
          </div>
        </div>
      </div>
    </header>
              
              
              
           

    {/*Main Dashboard Content*/}
    <main class="p-6">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Welcome back,{userData.firstName} </h2>
          
        </div>
        <div class="flex items-center bg-green-100 px-4 py-2 rounded-full">
          <div class="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
          <span class="text-green-700 text-sm font-medium">Online</span>
        </div>
      </div>

      {/*Statistics*/}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-gray-500 text-sm">Active Courses</p>
              <h3 class="text-3xl font-bold text-gray-800 mt-1">{userData.stats.courses}</h3>
            </div>
            <div class="bg-indigo-100 p-3 rounded-full">
              <i class="fas fa-book text-indigo-600"></i>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-gray-500 text-sm">Total Students</p>
              <h3 class="text-3xl font-bold text-gray-800 mt-1">{userData.stats.studentsEnrolled}</h3>
            </div>
            <div class="bg-blue-100 p-3 rounded-full">
              <i class="fas fa-users text-blue-600"></i>
            </div>
          </div>
        </div>
       </div>

      {/* Quick Actions*/}

{ isOnAdminDashBoard && 
    (!course ? (
       <div class="bg-white rounded-lg shadow-sm p-6 ">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div class="flex flex-col-3 space-x-3">
          <button onClick={() => setCourse(true)} class="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
            <i class="fas fa-plus-circle mr-2"></i>
            Create New Course
          </button>

          <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
            <i class="fas fa-calendar-alt mr-2"></i>
            Schedule Class
          </button>
        </div>
      </div>
    ):(
      
  <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl border border-indigo-100">
    <h2 className="text-2xl font-bold text-indigo-700 mb-6">Create New Course</h2>

    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-violet-700 mb-1">Course Title</label>
        <input
          type="text"
          name="title"
          className="w-full px-4 py-2 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. Mastering React"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-violet-700 mb-1">Description</label>
        <textarea
          name="description"
          rows="4"
          className="w-full px-4 py-2 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Course description (min 10 characters)"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-violet-700 mb-1">Image URL</label>
        <input
          type="url"
          name="imageUrl"
          className="w-full px-4 py-2 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="https://example.com/image.jpg"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-violet-700 mb-1">Price (INR)</label>
        <input
          type="number"
          name="price"
          className="w-full px-4 py-2 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. 499"
          min="1"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
       
      >
        Create Course
      </button>
    </form>
  </div>


    )
    )
}


    </main>

    <main>
      <Outlet/>
    </main>
  </div>
</div>

   );
}