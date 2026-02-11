import { Link } from "react-router-dom";



export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Login Page
        </h2>
        <form>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300 block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter the Email"
              className="w-full px-4 py-3 bg-white/10 text-white border rounded-lg placeholder-gray-400 outline-none transition"
            />

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter the password"
                className="w-full px-4 py-3 bg-white/10 text-white  rounded-lg  placeholder-gray-400 transition border outline-none "
              />
            </div>

            <div className="text-right">
              <Link
                to="#"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition"
              >
                Forget password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition "
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </form>

        <p className="text-green-400 font-medium mt-3">
          {" "}
          Don't have an account
          <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-sm"> Signup </Link>
        </p>
      </div>
    </div>
  );
}
