'use client'
import Image from "next/image";
import Link from "next/link";
import {ShoppingBag, Heart, X, AlignRight, User } from "lucide-react";
import { useState } from "react";
import TopHeader from "./TopHeader";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
function MyNav() {
  const { isSignedIn } = useUser(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="m-0 p-0 max-w-screen">
      {/* Top Header */}
      <TopHeader />

      {/* Main Navbar */}
      <div className="w-full md:w-[93%] mx-auto relative  text-sm ">
        <div className="flex justify-evenly  md:justify-between items-center h-[60px]">
          {/* Logo */}
          <div className="max-w-[38px]">
            <Image src="/images/logo2.png" alt="nike logo" width={58} height={20} />
          </div>

          {/* Nav Links for Large Screens */}
          <ul className="hidden lg:flex justify-evenly w-[50%]">
            <li>
              <Link href="/" className="hover:text-gray-500">Home</Link>
            </li>
            <li>
              <Link href="/Products" className="hover:text-gray-500">
                Products
              </Link>
            </li>
           
            <li>
              <Link href="/ContactUs" className="hover:text-gray-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-gray-500"><SignUpButton /></Link>
            </li>
            <li>
              <Link href="/Login" className="hover:text-gray-500"><SignInButton /></Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex justify-between items-center w-auto  md:w-[25%] lg:w-[10%] gap-4">
            
          <div>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignUpButton >
      <button className="text-2xl cursor-pointer text-gray-700 hover:text-black">
        <User />
      </button>
    </SignUpButton>
        )}
      </div>
            {/* Icons */}
            <Link href="/wishList"><Heart className="cursor-pointer" /></Link>
            <Link href="/cart"><ShoppingBag className="cursor-pointer" /></Link>

            {/* Menu Icon for Small Screens */}
            <div
              className="lg:hidden cursor-pointer bg-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <AlignRight />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-md z-10 lg:hidden">
            <ul className="flex flex-col items-center py-6 space-y-4">
              <li>
                <Link href="/" className="hover:text-gray-500" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Products" className="hover:text-gray-500" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link href="/ContactUs" className="hover:text-gray-500" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/Signin" className="hover:text-gray-500" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/Login" className="hover:text-gray-500" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/Products" className="hover:text-gray-500" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/CheckOut" className="hover:text-gray-500" onClick={toggleMenu}>
                  CheckOut
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default MyNav;
