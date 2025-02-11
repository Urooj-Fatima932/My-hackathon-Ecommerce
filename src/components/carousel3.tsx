'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Replace with your icon library
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchSanityData } from '@/lib/sanityData';
import Link from 'next/link';

function Carousel3() {
  interface Product {
    productName: string;
    image: string;
    inventory: string;
    price: number;
    category: string;
    status: string;
    _id: string;
  }

  const [wshoes, setWshoes] = useState<Product[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSanityData();
        
        if (result?.data) {
          setWshoes(result.data);
          console.log(result.data);
        } else {
          console.log('No data available');
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchData();
  }, []);

  const sliderRef = useRef<Slider | null>(null); // Reference for the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev(); // Navigate to the previous slide
  };

  const handleNext = () => {
    sliderRef.current?.slickNext(); // Navigate to the next slide
  };

  return (
    <main>
      <div className="w-[93%] mx-auto m-0 p-0">
        <div className="flex gap-9">
          <div className="slider-container w-full">
            <div className="flex justify-end items-center">
              <ul className="flex gap-4 items-center justify-end p-2">
                <p className="text-lg font-medium">Shop Women&apos;s</p>
                <div
                  className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer active:bg-[rgb(208,208,208)]"
                  onClick={handlePrevious}
                >
                  <ChevronLeft />
                </div>
                <div
                  className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer active:bg-[#d0d0d0]"
                  onClick={handleNext}
                >
                  <ChevronRight />
                </div>
              </ul>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {wshoes.map((product) => (
                <Link href={`Product_Details/${product._id}`} key={product._id}>
                  <div className="p-4 flex flex-col border-none outline-none group relative">
                    <div className="relative overflow-hidden">
                      <Image
                        className="object-cover w-full h-auto transition-all group-hover:brightness-75"
                        src={product.image}
                        alt={product.productName}
                        width={441}
                        height={441}
                      />
                      {/* "Shop" Text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                          Shop
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-[500] text-orange-600 pt-2 px-1">{product.status}</p>
                    </div>
                    <div className="font-[600] text-Cblack flex justify-between pt-1 px-2">
                      <p>{product.productName}</p>
                      <p>Rs.{product.price}</p>
                    </div>
                    <p className="text-sm text-tgray mx-2">{product.category}</p>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Carousel3;
