import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase";
import { ShieldCheck, Mail, Lock } from "lucide-react";

const auth = getAuth(app);

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("User Created");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        {/* <iframe
            className="scale-150 absolute h-full w-full  inset-0 z-0"
            src="https://motionbgs.com/media/5329/tech-hud.960x540.mp4"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            controls={false}
            title="Background Video"
        ></iframe> */}
         <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="https://motionbgs.com/media/5329/tech-hud.960x540.mp4" type="video/mp4" />
        </video>
        <div className="bg-gradient-to-br from-purple-800 via-indigo-600 to-purple-900 p-8 rounded-lg shadow-2xl w-96 z-10">
            <div className="text-center mb-6">
                <ShieldCheck className="mx-auto text-purple-400" size={50} />
                <h1 className="text-3xl font-bold text-purple-300">Sign Up</h1>
                <p className="text-sm text-gray-400">Create your Cyberpunk account</p>
            </div>
            <div className="space-y-4">
                <div className="relative">
                    <Mail className="absolute text-purple-300 left-3 top-3" size={20} />
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full bg-black border border-purple-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring focus:ring-purple-600 text-purple-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="relative">
                    <Lock className="absolute text-purple-300 left-3 top-3" size={20} />
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="w-full bg-black border border-purple-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring focus:ring-purple-600 text-purple-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    onClick={signUpUser}
                    className="w-full bg-purple-600 hover:bg-purple-500 transition duration-300 py-2 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-600/50"
                >
                    Create Account
                </button>
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">
                Already have an account?{" "}
                <a href="/login" className="text-purple-300 hover:underline">
                    Login here
                </a>
            </p>
        </div>
    </div>
);
};

export default SignUpPage;
