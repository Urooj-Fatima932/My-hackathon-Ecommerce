import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Roboto} from "next/font/google"
import { CartProvider } from "@/context/cartContext";
import Footer from "@/components/Footer"; 
import {
  ClerkProvider,

  SignedIn,
  SignedOut,
  
} from '@clerk/nextjs'

import { SelectProvider } from "@/context/selectContext";
import { WishlistProvider } from "@/context/WishContext";

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ['400', '500', '700'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: "Nike.Just do it",
  description: "Nike.Just do it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {
        colorPrimary: 'blue',
            colorText: 'black'}}}
    >
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
       <CartProvider >
      
      <SelectProvider>
      <WishlistProvider>
      <SignedOut>
              
              
            </SignedOut>
            <SignedIn >
              
            </SignedIn>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        </WishlistProvider>
      </SelectProvider>
     
    </CartProvider>
    
        
      </body>
    </html>
    
    </ClerkProvider>
  );
}
