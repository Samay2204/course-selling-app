import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signin(){

    const [role,setRole] = useState(null);

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async () => {
        try{
            const response = await fetch(`/api/${role}/signin`,{  // fetch api used to make HTTP request the server, returns a promise as Response JSON object, built in modern browsers.
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),

            })

           const result = await response.json();

            if(response.ok){
                alert(`${role} logged in successfully`);
                const firstName = result.firstName;
                const lastName = result.lastName;
                localStorage.setItem("token",result.token); // localStorage stores the token sent by backend at the browser until removed manually/persistently
                
                if(role === 'admin'){
                  navigate('/dashboard/admin');

                }else{
                   navigate('/dashboard/user');
                }



            }else{
                alert(result.message || "Login failed");
            }
        }catch(err){
            console.error(err);
            alert("try again server error" + err.message)
        }
    }



    return(<>
    
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name = "email"
                  onChange={handleEmailChange}
                  value = {email}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <label >Choose your role:</label>
                  <select id="dropdown" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Your Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <input onChange={handlePasswordChange} 
                 name="password"
                 type="password"
                 value={password}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
        </div>
      </div>
     </>)
}