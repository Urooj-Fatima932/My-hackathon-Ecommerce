// contexts/WishlistContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface Product {
  _id: string;
  productName: string;
  price: number;
  image: string;
  category: string;
  alt: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // ✅ Load wishlist from localStorage when component mounts
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Error parsing wishlist from localStorage", error);
        setWishlist([]);
      }
    }
  }, []);

  // ✅ Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      const updatedWishlist = [...prev, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save immediately
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item._id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save immediately
      return updatedWishlist;
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item._id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
