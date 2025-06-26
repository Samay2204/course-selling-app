export default function BrowseCourses() {
  return (
    <div className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Courses</h1>
            <p className="text-gray-600">Discover X courses to enhance your skills</p>
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

        <div className="grid grid-cols-3 gap-8 p-6">
          

          
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src="/placeholder.jpg" alt="Course" className="w-full h-48 object-cover object-top" />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Category</span><span className="mx-2">•</span><span>Devlopement</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">Course Title</h3>
                  <p className="text-gray-600 mb-2">Instructor: John Doe</p>
                  <div className="flex items-center mb-2">
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">Short description of the course...</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900 ml-2">$99.99</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700">Buy Now</button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200"><i className="fas fa-shopping-cart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src="/placeholder.jpg" alt="Course" className="w-full h-48 object-cover object-top" />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Category</span><span className="mx-2">•</span><span>Devlopement</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">Course Title</h3>
                  <p className="text-gray-600 mb-2">Instructor: John Doe</p>
                  <div className="flex items-center mb-2">
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">Short description of the course...</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900 ml-2">$99.99</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700">Buy Now</button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200"><i className="fas fa-shopping-cart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src="/placeholder.jpg" alt="Course" className="w-full h-48 object-cover object-top" />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Category</span><span className="mx-2">•</span><span>Devlopement</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">Course Title</h3>
                  <p className="text-gray-600 mb-2">Instructor: John Doe</p>
                  <div className="flex items-center mb-2">
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">Short description of the course...</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900 ml-2">$99.99</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700">Buy Now</button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200"><i className="fas fa-shopping-cart"></i></button>
                    </div>
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
              <p className="mb-4">Empowering learners worldwide with quality education</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white cursor-pointer"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-white cursor-pointer"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-white cursor-pointer"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-white cursor-pointer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
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
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="mb-4">Subscribe to get updates on new courses and features</p>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-full w-full text-gray-800 border-none" />
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-r-full hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap !rounded-button cursor-pointer">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2025 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
