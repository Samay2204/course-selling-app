import { useState } from 'react';
import {Link } from 'react-router-dom'

function Signup() {
  const [role, setRole] = useState(null); // Role = 'admin' or 'user'

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/admin/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),

           });

          const result = await res.json();

          if (result.error?.name === "ZodError") {
              
              alert(`Invalid input format, Signup failed`);
            }else{
               if(res.ok){
               alert(`${role} signed up successfully`);
           }
            }
          
          
           

        }catch(err){
          alert('Signup Failed');
        }
  };

  return (
    <>
    <div className='min-h-screen flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md'>
           {!role ? (
            <div className='space-y-6 text-center'>
                 <h2 className="text-2xl font-bold">Choose Account Type</h2>

                 <button onClick={() => setRole('admin')} className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                     Sign up as Admin / Instructor
                </button>

                <button onClick={() => setRole('user')} className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
                Sign up as User
                </button>

                <div>
                  <p>Already at LearnHUB? </p>
                
                <Link to="/Signin">
                <button className="text-blue-600 underline">
                  signin
                </button>
                </Link>
                </div>
              </div>
           ):(
            <div className="space-y-4 border p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-4">
              {role === 'admin' ? 'Admin Signup' : 'User Signup'}
            </h2>
            <input name="firstName" placeholder="First Name" className="input" onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" className="input" onChange={handleChange} />
            <input name="email" placeholder="Email" className="input" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} />

            <button onClick={handleSubmit} className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Sign up as {role}
            </button>
            
            <button onClick={() => setRole(null)} className="text-sm text-gray-500 underline mt-2 block text-center">
              Go Back
            </button>


            </div>
           )}
      </div>
    </div>
    </>
  )



  
}

export default Signup;
