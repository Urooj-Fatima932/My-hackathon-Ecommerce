
'use client'
import Link from "next/link";

import { PackageCheck } from "lucide-react";
import Image from "next/image";

import {Input} from "@/components/ui/input";

function CheckOut() {
  return (
    <main className="px-4 md:px-0">
      <div className="w-full md:w-[65%] mx-auto my-10 md:my-10 flex flex-col justify-between lg:flex-row ">
        {/* Left Section */}
        <div className="w-full lg:w-[50%]">
          <section>
            <h1 className="font-[500] text-xl md:text-2xl mb-4">
              How would you like to get your order?
            </h1>
            <p className="text-[#757575] mb-6 text-sm md:text-base">
              Customs regulation for India require a copy of the recipient KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.
              <Link href="#" className="underline">
                Learn More
              </Link>
            </p>
            <div className="h-[82px] w-full border-2 p-[22px] border-[#111111] flex justify-start items-center rounded-[10px] gap-2 hover:bg-[#111111] hover:text-white">
              <PackageCheck />
              <p>Deliver It</p>
            </div>
          </section>

          <section className="my-8">
            <h1 className="font-[500] text-xl md:text-2xl mb-4">Enter your name and address</h1>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Address Line 1" />
            <p className="text-xs text-[#757575] px-5">We do not ship to P.O box</p>
            <Input type="text" placeholder="Address Line 2" />
            <Input type="text" placeholder="Address Line 3" />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[50%]">
                <Input
                 type="text" placeholder="Postal Code" />
              </div>
              <div className="w-full md:w-[50%]">
                <Input type="text" placeholder="Locality" />
              </div>
            </div>
            <ul className="space-y-3 my-4">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Save this address to my profile
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Make this my preferred address
                </label>
              </li>
            </ul>
          </section>

          <section>
            <h1 className="font-[500] text-xl md:text-2xl mb-4">What is your contact information?</h1>
            <Input type="text" placeholder="Email" />
            <p className="text-xs text-[#757575] px-5">A confirmation email will be sent after checkout</p>
            <Input type="text" placeholder="Phone Number" />
            <p className="text-xs text-[#757575] px-5">A carrier might contact you to confirm delivery</p>
          </section>

          <section className="mt-5">
            <h1 className="font-[500] text-xl md:text-2xl mb-4">What is your PAN?</h1>
            <Input type="text" placeholder="PAN" />
            <p className="text-xs text-[#757575] px-5">
              Enter your PAN to enable payment with UPI, Net Banking or local card methods
            </p>
            <label className="flex text-sm items-center text-[#757575] my-5">
              <input type="checkbox" className="mr-2" /> Save PAN details to Nike Profile
            </label>
            <label className="flex text-sm items-start text-[#757575] my-10">
              <input type="checkbox" className="mr-2 mt-1" />
              I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
            </label>
            <button className="text-sm text-[#111111] bg-[#f5f5f5] py-3 rounded-[30px] mb-6 hover:bg-gray-300 w-full">
              Member Checkout
            </button>
          </section>
         
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[40%]">
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-[500] text-xl md:text-2xl text-[#111111]">Order Summary</h1>
            <div className="flex justify-between text-[#757575] text-sm md:text-base">
              <p>Subtotal</p>
              <p>₹ 20 890.00</p>
            </div>
            <div className="flex justify-between text-[#757575] text-sm md:text-base">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr className="border-gray-200 rounded" />
            <div className="flex justify-between text-sm md:text-base">
              <p>Total</p>
              <p>₹ 20 890.00</p>
            </div>
            <hr className="border-gray-200 rounded" />
            <p className="text-xs">(The total reflects the price of your order, including all duties and taxes)</p>
          </div>
          <h1 className="font-[600] mt-8 text-lg md:text-xl text-[#111111]">
            Arrives Mon, 27 Mar - Wed, 12 Apr
          </h1>
          <div className="w-full flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <Image alt="Outfit" src="/images/shoe1.jpg" width={60} height={60} className="w-24 h-24" />
              <ul>
                <li>Nike Dri-FIT ADV TechKnit Ultra</li>
                <li>Size L</li>
                <li>Price: ₹3895</li>
              </ul>
            </div>
            <div className="flex gap-4 items-start">
              <Image alt="Shoe" src="/images/shoe5.jpg"  width={60} height={60} className="w-24 h-24" />
              <ul>
                <li>Nike Dri-FIT ADV TechKnit Ultra</li>
                <li>Size L</li>
                <li>Price: ₹3895</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[65%] mx-auto my-10 md:my-20 flex flex-col lg:flex-row"> <section className="w-full md:w-[50%] mb-10">
                   
                   <hr />
                  <h1 className="font-[400] text-lg md:text-xl mb-8">Delivery</h1>
                    <hr />
                    <h1 className="font-[400] text-lg md:text-xl mb-8">Shipping</h1>
           <hr />
                    <h1 className="font-[400] text-lg md:text-xl mb-8">Billing</h1>
         <hr />
 <h1 className="font-[400] text-lg md:text-xl mb-8">Payment</h1>
      </section></div>
    </main>
  );
}

export default CheckOut;
