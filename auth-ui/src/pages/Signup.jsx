import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Signup() {
const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen flex items-center justify-center px-4 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Signup Page
        </h2>
        <form>
          <div>
            <label htmlFor="fullname" className="text-sm font-medium text-gray-300 mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullname"
              required
              placeholder="Enter The Full Name"
              className="w-full px-4 py-3 bg-white/10 border rounded-lg outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1 block">
              Email
           </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="enter the email "
              className="w-full px-4 py-3 bg-white/10 border rounded-lg outline-none"
            />
             
          </div>
   
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder="Enter The Password"
              className="w-full px-4 py-3 bg-white/10 border rounded-lg outline-none "

            />
            <p className="text-right top-5 text-sm font-medium  text-indigo-300" onClick={() => setShowPassword(!showPassword)}> {showPassword ? "show" : "Hide"}</p>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition border outline-none"
          >
            Signup
          </button>
        </form>

        <p className="mt-3 text-center text-green-400 font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-500 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
