'use client'
import React from "react";

interface CheckboxProps {
  label: string;
  id: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = "" }) => {
  return (
    <div className={`flex items-start gap-2
     ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="w-6 h-6 text-black border-gray-300 rounded"
      />
      <label htmlFor={id} className="text-sm text-gray-600 text-left">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
