'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Navigation() {
  const { user, logout } = useAuth();

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
          <Link
            href="/login"
            className="bg-[#8831ff] text-white px-4 py-2 rounded hover:bg-[#ae73ff] transition-colors font-chakra-petch"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="border border-[#8831ff] text-[#ae73ff] px-4 py-2 rounded hover:bg-[#8831ff] hover:text-white transition-colors font-chakra-petch"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
} 