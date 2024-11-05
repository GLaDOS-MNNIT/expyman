import React, { useContext } from "react";
import "./styles/MainPage.css";
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";

const MainPage = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
              <h2 className="text-4xl font-bold text-white">expyman</h2>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {user && (
                    <Link to="/dashboard" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                      Dashboard
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {user ? (
                <>
                  <button onClick={logoutUser} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    Login
                  </Link>
                  <button onClick={handleSignupClick} className="ml-4 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          {user && (
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/dashboard" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </nav>

      <header className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1669323926755-85f14a486343?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'Poppins', textShadow: '2px 2px 7px black' }}>Master budgeting and keep your finances balanced</h1>
          <a href="#" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">Learn More</a>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-0">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-500">📄</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Highly Versatile</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-500">☁️</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Easy Expense Management</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-500">🤑</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Savings Done Right</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
