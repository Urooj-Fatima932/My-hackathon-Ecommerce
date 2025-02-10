'use client'
import React from "react";

interface InputFieldProps {
  placeholder?: string; // Optional placeholder text
  type?: string;        // Input type (default: "text")
  className?: string;   // Additional custom class names
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = "Enter text",
  type = "text",
  className = "",
}) => {                                 
  return (
   
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full my-3 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] px-4 py-2 border border-gray-400 rounded-[7px] focus:outline-none focus:ring-1  focus:border-zinc-500  ${className}`}
      />
   
  );
};

export default InputField;
