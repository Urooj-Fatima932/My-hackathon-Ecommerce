// 
'use client'

import { Instagram, Twitter, Facebook, Youtube, MapPin } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function Footer() {
    // State to manage dropdown menus for small screens
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    return (
        <footer className="bg-[#111111] text-white">
            <div className="w-[93%] mx-auto min-h-[331px] h-auto py-6">
                {/* Mobile View */}
                <div className="flex flex-col md:hidden">
                    <ul className="font-extralight text-[14px] py-6">
                        <li>
                            <button
                                className="flex justify-between items-center w-full my-3"
                                onClick={() => toggleMenu(1)}
                            >
                                Resources <ChevronDown className={`transform transition-transform ${openMenu === 1 ? "rotate-180" : ""}`} />
                            </button>
                            {openMenu === 1 && (
                                <ul className="ml-4 text-gray-400">
                                    <li>Find a Store</li>
                                    <li>Become a Member</li>
                                    <li>Sign Up for Email</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                className="flex justify-between items-center w-full my-3"
                                onClick={() => toggleMenu(2)}
                            >
                                Help <ChevronDown className={`transform transition-transform ${openMenu === 2 ? "rotate-180" : ""}`} />
                            </button>
                            {openMenu === 2 && (
                                <ul className="ml-4 text-gray-400">
                                    <li>Order Status</li>
                                    <li>Delivery</li>
                                    <li>Returns</li>
                                    <li>Contact Us</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                className="flex justify-between items-center w-full my-3"
                                onClick={() => toggleMenu(3)}
                            >
                                About Nike <ChevronDown className={`transform transition-transform ${openMenu === 3 ? "rotate-180" : ""}`} />
                            </button>
                            {openMenu === 3 && (
                                <ul className="ml-4 text-gray-400">
                                    <li>News</li>
                                    <li>Careers</li>
                                    <li>Sustainability</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <ul className="flex justify-center gap-6 py-4">
                        <li><Twitter /></li>
                        <li><Facebook /></li>
                        <li><Youtube /></li>
                        <li><Instagram /></li>
                    </ul>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block">
                    <div className="flex justify-between  pb-6">
                        <div className="grid grid-cols-3 gap-10 w-3/4">
                            {/* Section 1 */}
                            <ul className="font-extralight text-[14px]">
                                <li className="my-4 font-semibold">Resources</li>
                                <li className="my-2 text-[#757575]">Find a Store</li>
                                <li className="my-2 text-[#757575]">Become a Member</li>
                                <li className="my-2 text-[#757575]">Sign Up for Email</li>
                                <li className="my-2 text-[#757575]">Student Discounts</li>
                            </ul>
                            {/* Section 2 */}
                            <ul className="font-extralight text-[14px]">
                                <li className="my-4 font-semibold">Get Help</li>
                                <li className="my-2 text-[#757575]">Order Status</li>
                                <li className="my-2 text-[#757575]">Delivery</li>
                                <li className="my-2 text-[#757575]">Returns</li>
                                <li className="my-2 text-[#757575]">Payment Options</li>
                                <li className="my-2 text-[#757575]">Contact Us</li>
                            </ul>
                            {/* Section 3 */}
                            <ul className="font-extralight text-[14px]">
                                <li className="my-4 font-semibold">About Nike</li>
                                <li className="my-2 text-[#757575]">News</li>
                                <li className="my-2 text-[#757575]">Careers</li>
                                <li className="my-2 text-[#757575]">Sustainability</li>
                            </ul>
                        </div>

                        {/* Social Icons */}
                        <ul className="flex items-start gap-6">
                            <li><Twitter /></li>
                            <li><Facebook /></li>
                            <li><Youtube /></li>
                            <li><Instagram /></li>
                        </ul>
                    </div>

                    {/* Bottom Footer */}
                    <div className="flex justify-between text-[14px] py-4">
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-1">
                                <MapPin /> Pakistan
                            </p>
                            <p>© 2023 Nike, Inc. All Rights Reserved</p>
                        </div>
                        <ul className="flex gap-6 text-[#757575]">
                            <li>Guides</li>
                            <li>Terms of Sale</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
