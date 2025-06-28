import { useState,useEffect } from "react";


export default function EnrolledCourses(){

  const [purchasedCourses,setPurchasedCourses] = useState(null);

  useEffect(()=>{
       const fetchPurchasedCourses = async ()=>{

        const token = localStorage.getItem("token");
         const res = await fetch("/api/user/purchases",{
          method: 'GET',
          headers:{
            'Authorization': token,
            'Content-Type': 'application/json',
          }
         })

         const data = await res.json();
         console.log(data);
         setPurchasedCourses(data);
         
       }

       fetchPurchasedCourses();
  }, [])
    
 return (
    
  <>
    <div>
      <div className="max-w-7xl mx-auto ">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Courses
            </h1>
            <p className="text-gray-600">You have enrolled in 5 courses</p>
          </div>
          <div className="mt-4 md:mt-0"></div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white !rounded-button whitespace-nowrap">
                All Courses
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 !rounded-button whitespace-nowrap">
                In Progress
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 !rounded-button whitespace-nowrap">
                Completed
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-sort-amount-down"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {purchasedCourses?.coursesData?.map((course)=>{
            return (
              <div key={course._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:translate-y-[-2px]">
              <div className="relative">
              <img
                src="course-thumbnail.jpg"
                alt="Course Title"
                className="w-full h-48 object-cover object-top"
              />

              </div>
                 <div className="p-6 bg-gray-100 ">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Development</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {course?.title}
              </h3>
              <p className="text-gray-600 mb-4">Instructor: {course?.creatorId?.firstName} {course?.creatorId?.firstName} </p>
              <div className="flex bg-gray-100 items-center justify-between">
                <div className="text-sm text-gray-500">
                  <i className="far fa-clock mr-1"></i> Duration: 4h 20m
                </div>
                <a href="#" className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
                  Start Learning
                </a>
              </div>
            </div>
          </div>
          </div>
            )
          })}
          
         
         </div>
        </div>
      </div>
    

    

    
  </>
)
}