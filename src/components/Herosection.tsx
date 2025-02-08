'use client'
import Image from "next/image";
import Button from "@/components/Button";
import Carousel2 from "./corousel2";
import Carousel from "./carousel";
import Carousel3 from "./carousel3";


function Hero() {
  return (
    <main className="m-0 p-0 flex flex-col ">
      <div className="w-[93%] mx-auto pb-8 ">
        <div className="w-[100%] bg-bgray">
          <p className="text-center font-semibold pt-3">Hello Nike App</p>
          <p className="text-sm text-center pb-3">
            Download To Access Everything Nike.{" "}
            <a href="#" className="underline">
              Get You Great
            </a>
          </p>
          <Image
            src="/images/Banner.jpg"
            alt="Nike shoe"
            width={100}
            height={700}
            layout="responsive"
            className="w-full h-auto"
          />
        </div>
        <div className="text-center space-y-6 mt-8">
          <p>First Look</p>
          <h1 className="text-3xl font-semibold md:text-[55px]">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-sm md:text-lg">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </p>
        </div>
        <div className="text-center ">
          <Button text="Notify Me" className="m-3"/>
          <Button text="Shop Air Max" className="m-3" />
        </div>
      </div>
      <Carousel name="Best Of Air Max"/>
      <section className="Featured width-full my-[48px]">
<div className="w-[93%] mx-auto"><h1 className="font-semibold text-xl">Featured</h1><Image  src="/images/Banner2.jpg" width={1300} height={700} alt="man wearing nike shoe" layout="responsive"/></div>
      </section>
      <div className="w-[93%] mx-auto">
        <div className="text-center h-[160px] flex flex-col items-center justify-between my-7">
          <h1 className=" text-2xl md:text-5xl font-bold sm:2xl">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p>
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <Button text="Find Your Shoe" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Carousel2 />
        <Carousel3 /></div>

<section className="w-full flex justify-center my-6">
<div className="w-[100%]  flex flex-col lg:flex-row justify-center items-center gap-[50px]">
  <ul className="text-center lg:text-left">
    <li className="font-semibold my-3">Icons</li>
    <li className="text-[#757575] my-3">Air Force 1</li>
    <li className="text-[#757575] my-3">Huarache</li>
    <li className="text-[#757575] my-3">Air Max 90</li>
    <li className="text-[#757575] my-3">Air Max 95</li>
  </ul>
  <ul className="text-center lg:text-left">
  <li className="font-semibold">Shoes</li>
    <li className="text-[#757575] my-3">All Shoes</li>
    <li className="text-[#757575] my-3">Custom Shoes</li>
    <li className="text-[#757575] my-3">Jordan Shoes</li>
    <li className="text-[#757575] my-3">Running Shoes</li>
  </ul>
  <ul className="text-center lg:text-left">
  <li className="font-semibold">Clothing</li>
    <li className="text-[#757575] my-3">Modest Wear</li>
    <li className="text-[#757575] my-3">All clothing</li>
    <li className="text-[#757575] my-3">Hoodies and Pullovers</li>
    <li className="text-[#757575] my-3">Shirts And Tops</li>
  </ul>
  <ul className="text-center lg:text-left"><li className="font-semibold my-3">Kids</li>
    <li className="text-[#757575] my-3">Infant & Toddler Shoes</li>
    <li className="text-[#757575] my-3">Kid&apos;s Shoes</li>
    <li className="text-[#757575] my-3">Kid&apos;s Jordan Shoes</li>
    <li className="text-[#757575] my-3">Kid&apos;s Basketball Shoes</li></ul>
</div>
</section>          
        </div>
      
    </main>
  );
}
export default Hero;
