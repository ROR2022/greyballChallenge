
"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';

const HeaderApp: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.products);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-lg font-bold">
                E-Commerce
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/cart">
              <span className="relative flex items-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-4-8m0 0L3 3m0 0h16.6M7 13L5.4 21m0 0H18m-7.4 0a2 2 0 104 0m-4 0a2 2 0 11-4 0"
                  ></path>
                </svg>
                <span className="ml-2">{cartItems.length} items</span>
                <span className="ml-2">(${totalPrice.toFixed(2)})</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
