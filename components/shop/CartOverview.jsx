"use client";

import Invoice from "@/components/shop/Invoice";
import Link from "next/link";
import { useContext } from "react";
import Summary from "@/components/shop/Summary";
import { SiteContext } from "@/context/MyContext";

export default function CartOverview() {
  const { cartedProducts, total } = useContext(SiteContext);
  return (
    <div
      className={`${
        cartedProducts.length > 0
          ? "md:grid md:grid-cols-7 gap-5 items-start"
          : ""
      }`}
    >
      <div className="bg-base-100 p-4 rounded-md md:col-span-5">
        <h1 className="text-xl lg:text-3xl font-bold">Shopping Cart</h1>
        {cartedProducts.length > 0 ? (
          <>
            <Invoice />
          </>
        ) : (
          <>
            <img
              src="/empty-cart.svg"
              alt="empty cart"
              className="max-w-80 mx-auto"
            />
            <div className="text-center">
              <h2 className="mb-5">Shopping Cart is Empty!</h2>
              <Link href="/">
                <button className="btn btn-primary btn-filled-style">
                  Start Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      {cartedProducts.length > 0 && <Summary total={total} />}
    </div>
  );
}
