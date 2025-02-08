"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the type for a cart item
export interface ICartItem {
  id: string;
  productName: string;
  category: string;
  selectedColor: string;
  price: number;
  image: string;
  selectedSize: string;
  inventory: number;
  quantity: number;
}

// Define the type for the CartContext
interface CartContextType {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (newItem: ICartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.id === newItem.id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor === newItem.selectedColor
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor === newItem.selectedColor
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prevItems, newItem];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
