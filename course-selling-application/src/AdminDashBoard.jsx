import { useState } from "react";


export default function AdminDashBoard(){

  
   return(

    <div class="flex h-screen bg-gray-50">
  
  
  <div class="bg-indigo-900 text-white w-64 transition-all duration-300 ease-in-out">
    <div class="p-4 flex items-center justify-between">
      <h2 class="text-xl font-bold">EduPlatform</h2>
      <button class="text-white cursor-pointer !rounded-button whitespace-nowrap">
        <i class="fas fa-chevron-left"></i>
      </button>
    </div>
    <nav class="mt-6">
      <div class="flex items-center py-3 px-4 bg-indigo-800 text-indigo-100">
        <i class="fas fa-tachometer-alt mr-3"></i>
        <span>Dashboard</span>
      </div>
      <div class="flex items-center py-3 px-4 hover:bg-indigo-800 text-indigo-300 cursor-pointer">
        <i class="fas fa-book mr-3"></i>
        <span>Courses</span>
      </div>
      <div class="flex items-center py-3 px-4 hover:bg-indigo-800 text-indigo-300 cursor-pointer">
        <i class="fas fa-users mr-3"></i>
        <span>Students</span>
      </div>
      <div class="flex items-center py-3 px-4 hover:bg-indigo-800 text-indigo-300 cursor-pointer">
        <i class="fas fa-cog mr-3"></i>
        <span>Settings</span>
      </div>
    </nav>
  </div>

  {/* <!-- Main Content --> */}
  <div class="flex-1 overflow-y-auto bg-gray-50">
    
    {/* <!-- Header --> */}
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <div class="flex justify-between items-center px-6 py-3">
        <div class="flex items-center">
          <img src="" alt="Logo" class="h-10" />
          <h1 class="ml-3 text-xl font-semibold text-gray-800">EduHUB</h1>
        </div>
        <div class="flex items-center space-x-6">
          <div class="text-gray-600">
            <span class="mr-2">Today is Monday, June 16, 2025</span>
          </div>
          <div class="flex items-center">
            <img src="" alt="Profile" class="h-10 w-10 rounded-full object-cover" />
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-800">Dr. Michael Johnson</p>
              <p class="text-xs text-gray-500">Senior Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* <!-- Main Dashboard Content --> */}
    <main class="p-6">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Welcome back, Dr. Johnson</h2>
          <p class="text-gray-600">Last login: June 15, 2025 at 08:45 AM</p>
        </div>
        <div class="flex items-center bg-green-100 px-4 py-2 rounded-full">
          <div class="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
          <span class="text-green-700 text-sm font-medium">Online</span>
        </div>
      </div>

      {/* <!-- Key Statistics Cards --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-gray-500 text-sm">Active Courses</p>
              <h3 class="text-3xl font-bold text-gray-800 mt-1">12</h3>
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
              <h3 class="text-3xl font-bold text-gray-800 mt-1">1,248</h3>
            </div>
            <div class="bg-blue-100 p-3 rounded-full">
              <i class="fas fa-users text-blue-600"></i>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-gray-500 text-sm">Average Rating</p>
              <h3 class="text-3xl font-bold text-gray-800 mt-1">4.8</h3>
            </div>
            <div class="bg-yellow-100 p-3 rounded-full">
              <i class="fas fa-star text-yellow-600"></i>
            </div>
          </div>
        </div>
        
      </div>

      {/* <!-- Quick Actions --> */}
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div class="flex flex-col space-y-3">
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
            <i class="fas fa-plus-circle mr-2"></i>
            Create New Course
          </button>
          <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
            <i class="fas fa-calendar-alt mr-2 text-indigo-600"></i>
            Schedule Class
          </button>
          <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap">
            <i class="fas fa-tasks mr-2 text-indigo-600"></i>
            Review Assignments
          </button>
        </div>
      </div>
    </main>
  </div>
</div>

   );
}