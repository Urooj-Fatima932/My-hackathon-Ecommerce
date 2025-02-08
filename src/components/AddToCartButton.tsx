"use client";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/cartContext";
import { useSelect } from "@/context/selectContext"; // Adjust the import path

interface AddToCartButtonProps {
  product: {
    _id: string;
    productName: string;
    price: number;
    image: string;
    inventory: number;
    category: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const { selectedSize, selectedColor } = useSelect();

 // components/AddToCartButton.tsx
const handleAddToCart = () => {
  if (!selectedSize || !selectedColor) return;

  const cartItem = {
    id: `${product._id}-${selectedSize}-${selectedColor}`, // Unique composite ID
    productName: product.productName,
    price: product.price,
    image: product.image,
    inventory: product.inventory,
    quantity: 1,
    category: product.category,
    selectedSize,
    selectedColor,
  };

  addToCart(cartItem);
  
  toast({
    title: "Successfully Added to Cart!",
    description: `${product.productName} has been added to your cart.`,
    duration: 2000,
  });
};
  

  return (
    <div className="">
      <button
        onClick={handleAddToCart}
        disabled={!selectedSize || !selectedColor}
        className={`py-2 px-5 w-full rounded-[20px] 
          ${!selectedSize || !selectedColor ? "bg-tgray text-white cursor-not-allowed" : "bg-black text-white hover:bg-zinc-600"}`}
      >
        Add to cart
      </button>
      {/* Show error message below the button if size or color is not selected */}
      {!selectedSize || !selectedColor ? (
        <p className="text-red-700 text-sm mt-2">Please select a size and color default size is SM.</p>
      ) : null}
    </div>
  );
}
