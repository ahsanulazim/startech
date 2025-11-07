"use client";

import { SiteContext } from "@/app/context/MyContext";
import Link from "next/link";
import { useContext } from "react";
import { FaTrash, FaXmark } from "react-icons/fa6";
import Promo from "./Promo";

export default function Cart() {
  const { cartedProducts, removeFromCart, total } = useContext(SiteContext);

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-5"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu bg-base-200 h-full w-80 p-0 flex-nowrap">
        <div className="flex justify-between items-center bg-main text-white p-4">
          <h2 className="uppercase">Your Cart</h2>
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="cursor-pointer"
          >
            <FaXmark />
          </label>
        </div>
        <ul
          className={`flex-1 overflow-y-auto ${
            cartedProducts.length > 0 ? "" : "flex justify-center"
          }`}
        >
          {/* Sidebar content here */}
          {cartedProducts.length > 0 ? (
            cartedProducts.map((product) => (
              <li
                className="flex-row flex-nowrap items-start p-2 hover:bg-base-300"
                key={product.id}
              >
                <div className="flex grow items-start p-0 hover:bg-transparent">
                  <img
                    className="size-10 rounded-box aspect-square object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="text-pretty">
                    <h4>{product.title}</h4>
                    <p className="text-sm uppercase font-semibold">
                      <span lang="bn">৳</span>
                      {product.price} × {product.quantity} ={" "}
                      <span lang="bn">৳</span>
                      {product.price * product.quantity}
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-square btn-error btn-sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))
          ) : (
            <li className="justify-center">Empty Cart</li>
          )}
        </ul>
        <footer>
          <Promo />
          <div className="my-2">
            <div className="flex *:flex-1 *:text-right px-2">
              <div className="text-black/60">Sub Total</div>
              <div className="font-bold">
                <span lang="bn">৳</span>
                {total}
              </div>
            </div>
            <div className="divider my-0"></div>
            <div className="flex *:flex-1 *:text-right px-2">
              <div className="text-black/60">Total</div>
              <div className="font-bold">
                <span lang="bn">৳</span>
                {total}
              </div>
            </div>
          </div>
          {cartedProducts.length > 0 ? (
            <Link href="/cart">
              <button
                className="btn w-full bg-accent border-accent rounded-none text-white"
                onClick={() => {
                  const drawer = document.getElementById("my-drawer-5");
                  if (drawer) drawer.checked = false;
                }}
              >
                Checkout
              </button>
            </Link>
          ) : (
            <button className="btn w-full btn-primary rounded-none" disabled>
              Checkout
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
