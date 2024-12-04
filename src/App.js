import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Projects.jsx";
import LoginPage from "./Pages/Auth/LoginPage.jsx";
import SignUpPage from "./Pages/Auth/SignUpPage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import LandingPage from "./Pages/HomePage/LandingPage.jsx";
import AboutPage from "./Pages/HomePage/AboutPage.jsx";

function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>} />

          {/* Protected Route */}
          <Route
            path="/"
            element={
              // <PrivateRoute>
                <LandingPage />
              // </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
