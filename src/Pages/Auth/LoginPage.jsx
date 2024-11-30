import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { LogIn, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User logged in");
        localStorage.setItem("user", email);
        Navigate('/')
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="https://motionbgs.com/media/1650/futuristic-elements-hud.960x540.mp4" type="video/mp4" />
        </video>
        <div className="bg-gradient-to-br from-teal-800 via-cyan-600 to-teal-900 p-8 rounded-lg shadow-2xl w-96 relative z-10">
            <div className="text-center mb-6">
                <LogIn className="mx-auto text-teal-400" size={50} />
                <h1 className="text-3xl font-bold text-teal-300">Login</h1>
                <p className="text-sm text-gray-400">Access your Cyberpunk account</p>
            </div>
            <div className="space-y-4">
                <div className="relative">
                    <Mail className="absolute text-teal-300 left-3 top-3" size={20} />
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full bg-black border border-teal-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring focus:ring-teal-600 text-teal-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="relative">
                    <Lock className="absolute text-teal-300 left-3 top-3" size={20} />
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="w-full bg-black border border-teal-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring focus:ring-teal-600 text-teal-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    onClick={loginUser}
                    className="w-full bg-teal-600 hover:bg-teal-500 transition duration-300 py-2 rounded-lg font-semibold text-white shadow-lg hover:shadow-teal-600/50"
                >
                    Log In
                </button>
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">
                Don't have an account?{" "}
                <a href="/signup" className="text-teal-300 hover:underline">
                    Sign up here
                </a>
            </p>
        </div>
    </div>
);
};

export default LoginPage;
