// components/WishlistItem.tsx
"use client";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

interface WishlistItemProps {
  item: {
    _id: string;
    image: string;
    productName: string;
    price: number;
    category: string;
  };
  onRemove: (productId: string) => void;
}

const WishlistItem = ({ item, onRemove }: WishlistItemProps) => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b items-center">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={item.image}
          alt={item.productName}
          width={120}
          height={120}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {item.productName}
          </div>
          <div className="text-sm md:text-md font-bold text-black mt-2">
            Rs.{item.price}
          </div>
        </div>
        
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {item.category}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            {/* Add any additional elements here if needed */}
          </div>

          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => onRemove(item._id)}
            aria-label="Remove item"
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;