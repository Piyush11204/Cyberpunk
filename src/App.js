import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Projects.jsx";
import LoginPage from "./Pages/Auth/LoginPage.jsx";
import SignUpPage from "./Pages/Auth/SignUpPage.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./Pages/HomePage/AboutPage.jsx";
import ContactPage from "./Pages/Contact Page/ContactPage.jsx";
import Resume from "./components/Resume.jsx";

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
          <Route path="/" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />

          
          
        </Routes>
        <Resume/>
      </div>
    </Router>
  );
}

export default App;
