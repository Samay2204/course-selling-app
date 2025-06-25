import { useEffect, useState } from "react";
import axios from "axios";


export default function Courses(){
    const [courses,setCourses] = useState([]);

    useEffect( () => {
        const fetchCourses = async () => {

            const token = localStorage.getItem("token");

            try{
            const response = await axios.get(`/api/admin/course/bulk`, {
                headers: {
                    "Authorization": token,
                         },
            })

            setCourses(response.data.courses);
        }catch(err){
              console.error("Failed to Load Courses", err)
        }
    };
         fetchCourses();
        
    }, [])


    return (
       <>
       <div className="grid grid-cols-3 gap-8 p-6">
        {courses.map((course) => (

            
        <div key={course._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-500">{course.description}</p>
          </div>
          <div className="flex items-center justify-between px-4 pb-4">
            <span className="text-gray-700 font-medium">₹{course.price}</span>
            <div className="space-x-4">
            <button className="px-4 py-2 bg-indigo-100 text-sm rounded-full text-indigo-800 hover:bg-indigo-700 hover:text-white transition">
                  Edit Course
           </button>
           <button className="px-4 py-2 bg-indigo-100 text-sm rounded-full text-indigo-800 hover:bg-indigo-700 hover:text-white transition">
                  Add Content
           </button>
 
            </div>
          </div>
        </div>
            

        ))}
       </div>
       </>
    )
}