'use client';
import Image from 'next/image';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ICartItem } from '@/context/cartContext';

interface CartItemProps {
    item: ICartItem;
    onRemove: (id: string) => void;
    onQuantityChange: (id: string, newQuantity: number) => void;
    onSelect: (id: string, isSelected: boolean) => void;
    isChecked: boolean; // Add this line
  }
  
  const CartItem = ({ item, onQuantityChange, onRemove, onSelect, isChecked }: CartItemProps) => {
    const [quantity, setQuantity] = useState(item.quantity);
  
    const handleIncrement = () => {
      if (quantity < item.inventory) {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(item.id, newQuantity);
      }
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        onQuantityChange(item.id, newQuantity);
      }
    };
  
    return (
      <div className="flex py-5 gap-3 md:gap-5 border-b items-center">
        <input
          type="checkbox"
          checked={isChecked} // Use prop instead of local state
          onChange={() => onSelect(item.id, !isChecked)}
          className="w-5 h-5 cursor-pointer"
        />
  
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
          <Image src={item.image} alt={item.productName} width={120} height={120} />
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
          <div className="text-md font-medium text-black/[0.5] hidden md:block">{item.category}</div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
              <div className="flex items-center gap-1">
                <div className="font-semibold">Size:</div>
                <span>{item.selectedSize}</span>
              </div>
  
              <div className="flex items-center gap-1">
                <div className="font-semibold">Quantity:</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDecrement}
                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                    disabled={quantity >= item.inventory}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
  
            <RiDeleteBin6Line
              className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
              onClick={() => onRemove(item.id)}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;