"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import Modal from "./Modal"; // Import the Modal component

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/");
        onClose();
      } else {
        setError("Invalid credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6 text-[#bd8cff] font-rajdhani text-center">
        Login
      </h2>
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-[#ae73ff] mb-2 font-chakra-petch"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 rounded bg-gray-900 border border-[#8831ff]/30 text-white focus:outline-none focus:border-[#ae73ff]"
            required
          />
        </div>
        <div>
          <label
            className="block text-[#ae73ff] mb-2 font-chakra-petch"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 rounded bg-gray-900 border border-[#8831ff]/30 text-white focus:outline-none focus:border-[#ae73ff]"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#8831ff] text-white py-2 rounded hover:bg-[#ae73ff] transition-colors font-chakra-petch disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-4 text-center text-[#ae73ff] font-chakra-petch">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-[#bd8cff] hover:underline">
          Register
        </Link>
      </p>
    </Modal>
  );
}
