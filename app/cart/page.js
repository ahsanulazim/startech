"use client";

import Invoice from "@/components/shop/Invoice";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { useContext } from "react";
import { SiteContext } from "../context/MyContext";

export default function Cart() {
  const { cartedProducts, total } = useContext(SiteContext);

  return (
    <main className="bg-base-300">
      <Section>
        <Breadcrumbs title="Cart" />
        <div className="bg-base-100 p-4 rounded-md">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          {cartedProducts.length > 0 ? (
            <>
              <Invoice />
              <div className="flex justify-end">
                <div className="max-w-60 w-full">
                  <div className="flex *:flex-1 *:text-right px-2">
                    <div className="text-black/60">Sub Total</div>
                    <div className="font-bold">৳{total}</div>
                  </div>
                  <div className="divider my-0"></div>
                  <div className="flex *:flex-1 *:text-right px-2">
                    <div className="text-black/60">Total</div>
                    <div className="font-bold">৳{total}</div>
                  </div>
                </div>
              </div>
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
      </Section>
    </main>
  );
}
