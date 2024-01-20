"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="flex items-center text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <motion.svg
          className="animate-spin h-16 w-16 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="#ffffff"
            d="M4 12a8 8 0 018-8V0C6.268 0 0 6.268 0 14h2c0-5.163 3.925-9.4 9-9.95V2.1C4.5 2.6 2 6 2 10s2.5 7.4 6 7.9v1.95C6.487 20.265 10.457 24 16 24c8.837 0 16-7.163 16-16h-2c0 9.925-8.075 18-18 18z"
          ></path>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Loading;
