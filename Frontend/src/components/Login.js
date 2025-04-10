import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const submithandler = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    loginUser(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 mx-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
          Login
        </h1>

        <form onSubmit={submithandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded mt-4 hover:bg-blue-700 transition duration-200"
            />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?&nbsp;
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
