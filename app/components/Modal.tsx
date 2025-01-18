"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "unset"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "unset"; // Cleanup on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg">
      <div className="bg-black/80 p-8 rounded-lg border border-[#8831ff]/30 w-full max-w-md relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#ae73ff] hover:text-[#bd8cff]"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
