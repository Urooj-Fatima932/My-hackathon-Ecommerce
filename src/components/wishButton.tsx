// components/ProductCard.tsx
"use client";
// In WishContext.tsx or wherever your Product type is defined
interface Product {
  _id: string;
  productName: string;
  price: number;
  image: string;
  inventory: number;
  category: string;
  
}

import { useWishlist } from '@/context/WishContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product._id);

  return (
    
    
      <button
        onClick={() => isWishlisted ? removeFromWishlist(product._id) : addToWishlist(product)}
        className=" bg-bgray p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        {isWishlisted ? '❤️' : '🤍'}
      </button>
   
  );
}