import React from "react";
import { Link } from "react-router-dom";



export default function Signup() {




  return (
    <div className="min-h-screen flex items-center justify-center px-4 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Signup Page
        </h2>
        <form>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter The Full Name"
              className="w-full px-4 py-3 bg-white/10 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter the email "
              className="w-full px-4 py-3 bg-white/10 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter The Password"
              className="w-full px-4 py-3 bg-white/10 border rounded-lg"

            />
            
         
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
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
