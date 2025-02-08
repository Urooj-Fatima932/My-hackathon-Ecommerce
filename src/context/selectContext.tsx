"use client";

import { createContext, useContext, useState } from "react";

// Define types for selected values
interface SelectContextType {
  selectedSize: string | null;
  selectedColor: string | null;
  setSelectedSize: (size: string) => void;
  setSelectedColor: (color: string) => void;
}

// Create context
const SelectContext = createContext<SelectContextType | null>(null);

// Provider Component
export function SelectProvider({ children }: { children: React.ReactNode }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <SelectContext.Provider value={{ selectedSize, selectedColor, setSelectedSize, setSelectedColor }}>
      {children}
    </SelectContext.Provider>
  );
}

// Hook for using the context
export function useSelect() {
  const context = useContext(SelectContext);
  if (!context) throw new Error("useSelect must be used within a SelectProvider");
  return context;
}
