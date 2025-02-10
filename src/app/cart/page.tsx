'use client';
import CartItem from '@/components/CartItem';
import Carousel from '@/components/carousel';
import { useCart } from '@/context/cartContext'; // Adjust the import path
import { useState } from 'react';
import Button from '@/components/Button';



function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Use the useCart hook

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({});

  // Handle item selection
  const handleSelect = (itemId: string, isSelected: boolean) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: isSelected,
    }));
  };
  const handleCheckout = async () => {
    await fetch("http://localhost:3000/api/chackout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.href = response.url;
          // console.log(response.url);
        }
      });
  };

 
  // Calculate subtotal based on selected items
  const subtotal = cartItems
    .filter((item) => selectedItems[item.id]) // Only count selected items
    .reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate total (assuming no taxes or shipping for now)
  const total = subtotal;

  // Handle quantity change
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    updateQuantity(itemId, newQuantity);
  };

  return (
    <main className="px-4 sm:px-6 md:px-8">
      <div className="w-full mx-[3] md:w-[75%] md:mx-auto mt-8 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-[70%] h-auto">
          <h1 className="font-[500] text-xl md:text-2xl my-4 md:my-6">Bag</h1>

          {/* Render Cart Items Dynamically */}
          {cartItems.length === 0 ? (
            <div>
              <p>Your cart is empty.</p>
              <Button text="Continue Shopping" />
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onQuantityChange={handleQuantityChange} // Pass the handler
                onSelect={handleSelect} // Pass the selection handler
                isChecked={selectedItems[item.id] || false} // Pass selection state
              />
            ))
          )}
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4">
          <h1 className="font-[500] text-xl md:text-2xl text-[#111111]">Summary</h1>
          <div className="flex justify-between text-sm md:text-base">
            <p>Subtotal</p>
            <p>Rs. {subtotal.toLocaleString()}</p> {/* Display dynamic subtotal */}
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr className="border-gray-200 rounded" />
          <div className="flex justify-between text-sm md:text-base">
            <p>Total</p>
            <p>Rs. {total.toLocaleString()}</p> {/* Display dynamic total */}
          </div>
        
        
          <button 
            className="text-sm bg-[#111111] cursor-pointer w-full text-white py-3 rounded-[30px] mb-6 hover:bg-gray-800"
            disabled={subtotal === 0} // Disable checkout if nothing is selected
            onClick={handleCheckout}
          >
          Checkout
          </button>
          
        
          
        </div>
      </div>

      {/* You Might Also Like */}
      <Carousel name="You Might Also Like" />
    </main>
  );
}

export default Cart;
