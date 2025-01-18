"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LoginPopup from "./LoginPopup"; // Import the LoginPopup component
import RegisterPopup from "./RegisterPopup"; // Import the RegisterPopup component

export default function Navigation() {
  const { user, logout } = useAuth();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false); // State for LoginPopup
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false); // State for RegisterPopup

  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-[#ae73ff] font-chakra-petch">
            Welcome, {user.name}
          </span>
          <button
            onClick={logout}
            className="bg-[#8831ff] text-white px-4 py-2 rounded hover:bg-[#ae73ff] transition-colors font-chakra-petch"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => setIsLoginPopupOpen(true)} // Open LoginPopup
            className="bg-[#8831ff] text-white px-4 py-2 rounded hover:bg-[#ae73ff] transition-colors font-chakra-petch"
          >
            Login
          </button>
          <button
            onClick={() => setIsRegisterPopupOpen(true)} // Open RegisterPopup
            className="border border-[#8831ff] text-[#ae73ff] px-4 py-2 rounded hover:bg-[#8831ff] hover:text-white transition-colors font-chakra-petch"
          >
            Register
          </button>
        </div>
      )}

      {/* Render the LoginPopup component */}
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={() => setIsLoginPopupOpen(false)}
      />

      {/* Render the RegisterPopup component */}
      <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onClose={() => setIsRegisterPopupOpen(false)}
      />
    </nav>
  );
}
