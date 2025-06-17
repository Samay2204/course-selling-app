import { useState } from "react";

export default function EnrolledCourses(){
    const [activeFilter,setActiveFilter] = useState("all");
 return (
    // <>   
    //   {/* Main Content */}
    //   <div className="pt-16 pb-16">
    //     <div className="max-w-7xl mx-auto px-4 py-8">

    //       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
    //         <div>
    //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
    //             My Courses
    //           </h1>
    //           <p className="text-gray-600">
    //             You have enrolled in 5 courses
    //           </p>
    //         </div>
    //         <div className="mt-4 md:mt-0">
    //         </div>
    //       </div>
    //       {/* Filters */}
    //       <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
    //         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
    //           <div className="flex space-x-2 mb-4 md:mb-0">
    //             <button
    //               onClick={() => setActiveFilter("all")}
    //               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
    //                 activeFilter === "all"
    //                   ? "bg-indigo-600 text-white"
    //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    //               } !rounded-button whitespace-nowrap`}
    //             >
    //               All Courses
    //             </button>
    //             <button
    //               onClick={() => setActiveFilter("in-progress")}
    //               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
    //                 activeFilter === "in-progress"
    //                   ? "bg-indigo-600 text-white"
    //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    //               } !rounded-button whitespace-nowrap`}
    //             >
    //               In Progress
    //             </button>
    //             <button
    //               onClick={() => setActiveFilter("completed")}
    //               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
    //                 activeFilter === "completed"
    //                   ? "bg-indigo-600 text-white"
    //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    //               } !rounded-button whitespace-nowrap`}
    //             >
    //               Completed
    //             </button>
    //           </div>
    //           <div className="relative">
    //             <button
    //               className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer"
    //             >
    //               <i className="fas fa-sort-amount-down"></i>
    //             </button>
    //             {/* {showSortOptions && (
    //               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
    //                 <button
    //                   onClick={() => {
    //                     setSortBy("recent");
    //                     setShowSortOptions(false);
    //                   }}
    //                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
    //                 >
    //                   Recently Accessed
    //                 </button>
    //                 <button
    //                   onClick={() => {
    //                     setSortBy("title");
    //                     setShowSortOptions(false);
    //                   }}
    //                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
    //                 >
    //                   Title A-Z
    //                 </button>
    //                 <button
    //                   onClick={() => {
    //                     setSortBy("progress");
    //                     setShowSortOptions(false);
    //                   }}
    //                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
    //                 >
    //                   Progress
    //                 </button>
    //               </div>
    //             )} */}
    //           </div>
    //         </div>
    //       </div>
    //       {/* Course Grid */}
    //       {sortedCourses.length > 0 ? (
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //           {sortedCourses.map((course) => (
    //             <div
    //               key={course.id}
    //               className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:translate-y-[-2px]"
    //             >
    //               <div className="relative">
    //                 <img
    //                   src={course.imageUrl}
    //                   alt={course.title}
    //                   className="w-full h-48 object-cover object-top"
    //                 />
    //                 <div className="absolute top-3 right-3">
    //                   <div className="bg-white rounded-full p-1 shadow-md">
    //                     <div
    //                       id={`progress-chart-${course.id}`}
    //                       className="w-10 h-10 relative"
    //                     >
    //                       <div className="absolute inset-0 flex items-center justify-center">
    //                         <span className="text-xs font-medium">
    //                           {course.progress}%
    //                         </span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 {course.status === "completed" && (
    //                   <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
    //                     Completed
    //                   </div>
    //                 )}
    //               </div>
    //               <div className="p-6">
    //                 <div className="flex items-center text-sm text-gray-500 mb-2">
    //                   <span>{course.category}</span>
    //                   <span className="mx-2">•</span>
    //                   <span>
    //                     {course.completedVideos}/{course.totalVideos} lessons
    //                   </span>
    //                 </div>
    //                 <h3 className="text-xl font-bold text-gray-800 mb-2">
    //                   {course.title}
    //                 </h3>
    //                 <p className="text-gray-600 mb-4">
    //                   Instructor: {course.instructor}
    //                 </p>
    //                 <div className="mb-4">
    //                   <div className="flex justify-between text-sm mb-1">
    //                     <span className="text-gray-600">Progress</span>
    //                     <span className="font-medium">{course.progress}%</span>
    //                   </div>
    //                   <div className="w-full bg-gray-200 rounded-full h-2">
    //                     <div
    //                       className={`h-2 rounded-full ${course.status === "completed" ? "bg-green-500" : "bg-indigo-600"}`}
    //                       style={{ width: `${course.progress}%` }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //                 <div className="bg-gray-50 rounded-lg p-4 mb-4">
    //                   <div className="flex items-start">
    //                     <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
    //                       <i className="fas fa-play text-indigo-600"></i>
    //                     </div>
    //                     <div className="ml-3">
    //                       <p className="text-sm font-medium text-gray-900">
    //                         Last watched: {course.lastWatched.title}
    //                       </p>
    //                       <p className="text-xs text-gray-500">
    //                         {course.lastWatched.timestamp}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="flex items-center justify-between">
    //                   {course.status === "in-progress" && (
    //                     <div className="text-sm text-gray-500">
    //                       <i className="far fa-clock mr-1"></i>{" "}
    //                       {course.timeRemaining} remaining
    //                     </div>
    //                   )}
    //                   <a
    //                     href="https://readdy.ai/home/58e1a78f-ed29-4692-8c4c-118a72a71197/ef6dfbf2-30f0-4e58-813a-3aaf03a31332"
    //                     data-readdy="true"
    //                     className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer"
    //                   >
    //                     {course.status === "completed"
    //                       ? "Review Course"
    //                       : "Continue Learning"}
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       ) : (
    //         <div className="bg-white rounded-lg shadow-md p-8 text-center">
    //           <div className="text-6xl text-gray-300 mb-4">
    //             <i className="fas fa-search"></i>
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-800 mb-2">
    //             No courses found
    //           </h3>
    //           <p className="text-gray-600 mb-6">
    //             {searchQuery
    //               ? `No courses match your search "${searchQuery}"`
    //               : activeFilter === "in-progress"
    //                 ? "You don't have any courses in progress"
    //                 : "You don't have any completed courses yet"}
    //           </p>
    //           <button
    //             onClick={() => {
    //               setSearchQuery("");
    //               setActiveFilter("all");
    //             }}
    //             className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer"
    //           >
    //             {searchQuery ? "Clear Search" : "View All Courses"}
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   {/* Footer */}
    //   <footer className="bg-gray-800 text-gray-300 py-12">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //         <div>
    //           <h3 className="text-xl font-bold text-white mb-4">LearnHub</h3>
    //           <p className="mb-4">
    //             Empowering learners worldwide with quality education
    //           </p>
    //           <div className="flex space-x-4">
    //             <a href="#" className="hover:text-white cursor-pointer">
    //               <i className="fab fa-facebook"></i>
    //             </a>
    //             <a href="#" className="hover:text-white cursor-pointer">
    //               <i className="fab fa-twitter"></i>
    //             </a>
    //             <a href="#" className="hover:text-white cursor-pointer">
    //               <i className="fab fa-linkedin"></i>
    //             </a>
    //             <a href="#" className="hover:text-white cursor-pointer">
    //               <i className="fab fa-instagram"></i>
    //             </a>
    //           </div>
    //         </div>
    //         <div>
    //           <h4 className="text-lg font-semibold text-white mb-4">
    //             Categories
    //           </h4>
    //           <ul className="space-y-2">
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Development
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Business
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Design
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Marketing
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Photography
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
    //           <ul className="space-y-2">
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Help Center
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Contact Us
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 FAQ
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:text-white cursor-pointer">
    //                 Privacy Policy
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="text-lg font-semibold text-white mb-4">
    //             Newsletter
    //           </h4>
    //           <p className="mb-4">
    //             Subscribe to get updates on new courses and features
    //           </p>
    //           <div className="flex">
    //             <input
    //               type="email"
    //               placeholder="Enter your email"
    //               className="px-4 py-2 rounded-l-full w-full text-gray-800 border-none"
    //             />
    //             <button className="px-6 py-2 bg-indigo-600 text-white rounded-r-full hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer">
    //               Subscribe
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-t border-gray-700 mt-8 pt-8 text-center">
    //         <p>&copy; 2025 LearnHub. All rights reserved.</p>
    //       </div>
    //     </div>
    //   </footer>
    // </>  


  <>
    <div className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-8">

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
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:translate-y-[-2px]">
            <div className="relative">
              <img
                src="course-thumbnail.jpg"
                alt="Course Title"
                className="w-full h-48 object-cover object-top"
              />
              <div className="absolute top-3 right-3">
                <div className="bg-white rounded-full p-1 shadow-md">
                  <div className="w-10 h-10 relative flex items-center justify-center text-xs font-medium">
                    30%
                  </div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Development</span>
                <span className="mx-2">•</span>
                <span>15/20 lessons</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Course Title
              </h3>
              <p className="text-gray-600 mb-4">Instructor: John Doe</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 rounded-full bg-indigo-600" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
                    <i className="fas fa-play text-indigo-600"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Last watched: React Basics
                    </p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <i className="far fa-clock mr-1"></i> 4h 20m remaining
                </div>
                <a
                  href="#"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Continue Learning
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LearnHub</h3>
            <p className="mb-4">
              Empowering learners worldwide with quality education
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white cursor-pointer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white cursor-pointer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-white cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white cursor-pointer">Development</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Business</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Design</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Marketing</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Photography</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white cursor-pointer">Help Center</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">FAQ</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="mb-4">
              Subscribe to get updates on new courses and features
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full w-full text-gray-800 border-none"
              />
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-r-full hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>
)
}