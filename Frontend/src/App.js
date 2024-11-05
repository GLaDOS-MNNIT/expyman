import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
// import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/signup/' element={<SignUp/>} />
          <Route path='/login/' element={<Login/>} />
          {/* <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
