import React from "react";
import laptop from "../assets/laptop.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination , Navigation } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Link} from 'react-router-dom'




function Home() {
  return (
  <>
    <nav className="flex items-center justify-between p-4 bg-white shadow">
    

      <div className="flex items-center space-x-8 ">
      <div className="text-xl font-bold text-violet-600">LearnHUB</div>

     
      <ul className="flex space-x-6 text-black">
        <li className="hover:text-indigo-300 cursor-pointer">Home</li>
        <li className="hover:text-indigo-300 cursor-pointer">My Courses</li>
        <li className="hover:text-indigo-300 cursor-pointer">Browse Courses</li>
      </ul>
      </div>
      

      
      

      
      <div className="flex items-center space-x-4">
        <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-64 px-4 py-2 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-sm"
        />
        <button className="absolute right-3 top-2.5 text-gray-400 hover:text-indigo-500" >
          <i className="fas fa-search"></i>
        </button>
        </div>
        
        <button className="text-gray-700 hover:text-indigo-600">
          <i className="fas fa-user-circle text-2xl"></i>
        </button>

        <Link to="SignUp">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
        </Link>

       
       
      </div>
    </nav>

     {/* Hero */}
        <div>
           <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
               <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="grid grid-cols-2 gap-8 items-center">
                       <div>
                            <h1 className="text-5xl font-bold leading-tight mb-6">
                                Unlock Your Potential with Expert-Led Courses
                            </h1>
                            
                            
                            <div className="space-x-4">
                                <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    Explore Courses
                                </button>
                                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    Start Learning
                                </button>
                            </div>

                            <p className="font-medium text-xl py-5">
                                Join millions of learners worldwide and transform your career with our premium online courses.
                            </p>
                        </div>

                        <div className="relative"> 
                            <img src={laptop} /> 
                        </div>

                    

                    

                    </div>
               </div>

               
           </div>
           
        </div>


        {/* Featured Courses */}
        <div className="max-w-7xl mx-auto px-4 py-16">

             <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Featured Courses
             </h2>


            <div className="grid grid-cols-3 gap-8 p-6">

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover"></img>
                    <div className="flex items-centre justify-left text-lg font-light mx-3 my-2">
                       <h3 >Advanced Web Devlopement with React and Typescript</h3>
                    </div>

                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold text-gray-800 mx-5 my-5">$50</span>
                       <button className="mx-5 my-5 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                        Buy Now
                       </button>
                    </div>
                    
                </div>

                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover"></img>
                    <div className="flex items-centre justify-left text-lg font-light mx-3 my-2">
                       <h3 >Digital Marketing Mastery 2025</h3>
                    </div>

                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold text-gray-800 mx-5 my-5">$45</span>
                       <button className="mx-5 my-5 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                        Buy Now
                       </button>
                    </div>
                    
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover"></img>
                    <div className="flex items-centre justify-left text-lg font-light mx-3 my-2">
                       <h3>UI/UX Design Principles</h3>
                    </div>

                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold text-gray-800 mx-5 my-5">$20</span>
                       <button className="mx-5 my-5 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                        Buy Now
                       </button>
                    </div>
                    
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover"></img>
                    <div className="flex items-centre justify-left text-lg font-light mx-3 my-2">
                       <h3 >Java Full Stack using Springboot</h3>
                    </div>

                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold text-gray-800 mx-5 my-5">$75</span>
                       <button className="mx-5 my-5 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                        Buy Now
                       </button>
                    </div>
                    
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover"></img>
                    <div className="flex items-centre justify-left text-lg font-light mx-3 my-2">
                       <h3 >Data Structures and Algorithms</h3>
                    </div>

                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold text-gray-800 mx-5 my-5">$80</span>
                       <button className="mx-5 my-5 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                        Buy Now
                       </button>
                    </div>
                    
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover"></img>
                    <div className="flex items-centre justify-left text-lg font-light mx-3 my-2">
                       <h3 >Android Developement Bootcamp </h3>
                    </div>

                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold text-gray-800 mx-5 my-5">$50</span>
                       <button className="mx-5 my-5 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                        Buy Now
                       </button>
                    </div>
                    
                </div>

                

                

                
            </div>
        </div>
<div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-centre">
                    What Our Students Say
                </h2>

                <Swiper 
                modules = {[Pagination,Autoplay,Navigation]}
                spaceBetween = {30}
                slidesPerView = {3}
                pagination = {{ clickable : true}}
                autoplay = {{delay:5000}}>
                    <SwiperSlide>
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                           <div className='flex items-center mb-4'>
                                   <img src='' alt='sam' className='w-12 h-12 rounded-full object-cover'/>
                                    <div className='ml-4'>
                                        <h4 className="font-semibold text-gray-800">
                                            Samay Namdeo
                                        </h4>
                                        <p className='text-gray-600 text-sm'>
                                            Developer
                                        </p>

                                    </div>
                           </div>

                           <div className='flex text-yellow-400 mb-4'>
                                <p className='text-gray-600'>
                                    This was a great course
                                </p>
                           </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                           <div className='flex items-center mb-4'>
                                   <img src='' alt='sam' className='w-12 h-12 rounded-full object-cover'/>
                                    <div className='ml-4'>
                                        <h4 className="font-semibold text-gray-800">
                                            Samay Namdeo
                                        </h4>
                                        <p className='text-gray-600 text-sm'>
                                            Developer
                                        </p>

                                    </div>
                           </div>

                           <div className='flex text-yellow-400 mb-4'>
                                <p className='text-gray-600'>
                                    This was a great course
                                </p>
                           </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                           <div className='flex items-center mb-4'>
                                   <img src='' alt='sam' className='w-12 h-12 rounded-full object-cover'/>
                                    <div className='ml-4'>
                                        <h4 className="font-semibold text-gray-800">
                                            Samay Namdeo
                                        </h4>
                                        <p className='text-gray-600 text-sm'>
                                            Developer
                                        </p>

                                    </div>
                           </div>

                           <div className='flex text-yellow-400 mb-4'>
                                <p className='text-gray-600'>
                                    This was a great course
                                </p>
                           </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                           <div className='flex items-center mb-4'>
                                   <img src='' alt='sam' className='w-12 h-12 rounded-full object-cover'/>
                                    <div className='ml-4'>
                                        <h4 className="font-semibold text-gray-800">
                                            Samay Namdeo
                                        </h4>
                                        <p className='text-gray-600 text-sm'>
                                            Developer
                                        </p>

                                    </div>
                           </div>

                           <div className='flex text-yellow-400 mb-4'>
                                <p className='text-gray-600'>
                                    This was a great course
                                </p>
                           </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>

       {/* Why choose us*/}
    
      <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Choose LearnHub
            </h2>
        <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <i className="fas fa-users text-4xl text-indigo-600 mb-4"></i>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Expert Instructors
                                </h3>
                                <p className="text-gray-600">
                                Learn from industry professionals with years of experience
                                </p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-clock text-4xl text-indigo-600 mb-4"></i>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Flexible Learning
                                </h3>
                                <p className="text-gray-600">
                                Study at your own pace, anywhere, anytime
                                </p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-certificate text-4xl text-indigo-600 mb-4"></i>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Certificates
                                </h3>
                                <p className="text-gray-600">
                                Earn recognized certificates upon completion
                                </p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-comments text-4xl text-indigo-600 mb-4"></i>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Community
                                </h3>
                                <p className="text-gray-600">
                                Join a global community of learners
                                </p>
                            </div>
                    </div>
                </div>
        </div>

        </div>

        <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8">
            Join over 100,000 students who have already transformed their
            careers
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-200 !rounded-button whitespace-nowrap">
            Join Now
          </button>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">LearnHub</h3>
              <p className="mb-4">
                Empowering learners worldwide with quality education
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Categories
              </h4>
              <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Developement.
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-white">
                      Marketing.
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-white">
                      Data Structures.
                    </a>
                  </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
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
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-r-full hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap">
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

    
  );
}

export default Home;
