// app/wishlist/page.tsx
"use client";
import { useWishlist } from '@/context/WishContext';
import Link from 'next/link';
import WishlistItem from '@/components/wishListItem';
import Button from '@/components/Button';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <Link href="/Products" className="text-primary hover:underline">
            <Button text='Continue Shopping'/>
          </Link>
        </div>
      ) : (
        <div className="space-y-6 w-[70%] mx-auto">
          {wishlist.map((item) => (
            <Link href={`Product_Details/${item._id}`}  key={item._id}>
            <WishlistItem
              item={item}
              onRemove={removeFromWishlist}
            />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}