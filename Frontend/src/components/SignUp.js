import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [first_name, setFirstname] = useState("")
  const [last_name, setLastname] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const { registerUser } = useContext(AuthContext);
  const submithandler = (e) => {
    e.preventDefault();
    registerUser(email, username, first_name, last_name, password, password2);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 mx-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
          Sign Up
        </h1>

        <form onSubmit={submithandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={e=>{setUsername(e.target.value)}}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              onChange={e=>{setFirstname(e.target.value)}}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              onChange={e=>{setLastname(e.target.value)}}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={e=>{setEmail(e.target.value)}}
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
              onChange={e=>{setPassword(e.target.value)}}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              onChange={e=>{setPassword2(e.target.value)}}
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
          Already have an account?&nbsp;
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
