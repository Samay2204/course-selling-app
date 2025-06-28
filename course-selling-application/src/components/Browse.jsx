
import {useState, useEffect} from "react";
import axios  from "axios";

export default function Browse() {
  const [allCourses,setallCourses] = useState([]);
  const [purchaseCard,setPurchaseCard] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  useEffect(()=>{
    const fetchAllCourses = async () =>{
      try{
         const response = await axios.get(`/api/course/preview`);
         setallCourses(response.data.courses);
      }catch(err){
              console.error("Failed to Load Courses", err)
        }
  };
   
  fetchAllCourses();
 },[]);

  
//axios.post(url,data(body),config)  


  const handleConfirmPurchase = async() => {
    const token = localStorage.getItem("token");
      try{
       const res = await axios.post(`/api/course/purchase`,
        
        { courseId: selectedCourse._id },
          { headers :{
              "Authorization": token
          }
        }
        )
        setPurchaseCard(false);
        console.log(res.data);
        }catch(err){
          console.error("Error in Purchasing Course" + err);
          
      }
    }

  

 return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Courses</h1>
            <p className="text-gray-600">Discover courses to enhance your skills</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 overflow-x-auto">
          <div className="flex space-x-4 min-w-max">
            <button className="flex flex-col items-center justify-center px-6 py-3 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100">
              <i className="fas fa-icon text-xl mb-2"></i>
              <span className="text-sm font-medium">Category</span>
            </button>
          </div>
        </div>

       

          {purchaseCard && selectedCourse && (
            <div className="fixed inset-0 bg-white  flex justify-center items-center z-50">
               <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
                  <h2 className="text-xl font-semibold mb-2">Confirm Purchase</h2>
                    <p className="mb-4">Do you want to purchase <strong>{selectedCourse.title}</strong> for ₹{selectedCourse?.price}?</p>

                     <div className="flex justify-end space-x-4">
                     <button onClick={() => setPurchaseCard(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                           Cancel
                     </button>
                     <button onClick={handleConfirmPurchase} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                     Confirm
                     </button>
                     </div>
                     </div>
                     </div>
                            )}

      <div className="grid grid-cols-3 gap-8 p-6">
          
           {allCourses.map((course) => {

            return(
              <div key={course._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src="/placeholder.jpg" alt="Course" className="w-full h-48 object-cover object-top" />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Category</span><span className="mx-2">•</span><span>Devlopement</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">{course.title}</h3>
                  <p className="text-gray-600 mb-2">Instructor: {course?.creatorId?.firstName} {course?.creatorId?.lastName}</p>
                  <div className="flex items-center mb-2">
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900 ml-2">{course.price}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => {
                        setSelectedCourse(course);
                        setPurchaseCard(true);
                      }} className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700">Buy Now</button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200"><i className="fas fa-shopping-cart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
           })}
         </div>
      </div>
    </div>
  );
}