"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import Modal from "./Modal"; // Import the Modal component

export default function RegisterPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const success = await register(name, email, password);
      if (success) {
        router.push("/login");
        onClose(); // Close the popup after successful registration
      } else {
        setError("Email already exists");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(`An error occurred during registration: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6 text-[#bd8cff] font-rajdhani text-center">
        Register
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
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 rounded bg-gray-900 border border-[#8831ff]/30 text-white focus:outline-none focus:border-[#ae73ff]"
            required
          />
        </div>
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
        <div>
          <label
            className="block text-[#ae73ff] mb-2 font-chakra-petch"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full p-2 rounded bg-gray-900 border border-[#8831ff]/30 text-white focus:outline-none focus:border-[#ae73ff]"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#8831ff] text-white py-2 rounded hover:bg-[#ae73ff] transition-colors font-chakra-petch disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <p className="mt-4 text-center text-[#ae73ff] font-chakra-petch">
        Already have an account?{" "}
        <Link href="/login" className="text-[#bd8cff] hover:underline">
          Login
        </Link>
      </p>
    </Modal>
  );
}
