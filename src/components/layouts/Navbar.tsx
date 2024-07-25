"use client";

import { FaMapLocationDot } from "react-icons/fa6";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <div
        className={`w-full flex justify-between items-center px-10 py-2 sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-gray-800 text-white" : "text-gray-800 bg-white"
        }`}
      >
        <div className='NavLeft'>
          <p className='font-bold'>Jogja Culture</p>
        </div>
        <div className='NavCenter'>
          <ul className='flex flex-row gap-3 font-semibold'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/Budaya'>Budaya</Link>
            </li>
            <li>
              <Link href='/Wisata'>Wisata</Link>
            </li>
          </ul>
        </div>
        <div className='NavRight flex flex-row items-center gap-4'>
          <p className='font-semibold'>Destination</p>
          <FaMapLocationDot className='text-2xl' />
        </div>
      </div>
    </Fragment>
  );
}
