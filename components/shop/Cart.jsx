"use client";

import { SiteContext } from "@/app/context/MyContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaTrash, FaXmark } from "react-icons/fa6";

export default function Cart() {
  const { cartedProducts, removeFromCart, total } = useContext(SiteContext);
  const [promo, setPromo] = useState("");

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
          className={`flex-1 overflow-y-auto ${cartedProducts.length > 0 ? "" : "flex justify-center"
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
          <form className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-2">
            <div className="join">
              <input
                type="text"
                className="input join-item focus:outline-none"
                placeholder="Promo Code"
                name="promo"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
              <button className="btn btn-primary join-item" disabled={!promo.trim()}>Apply</button>
            </div>
          </form>
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
          {
            cartedProducts.length > 0 ? <Link href="/cart">
              <button className="btn w-full bg-accent border-accent rounded-none text-white">
                Checkout
              </button>
            </Link> : <button className="btn w-full btn-primary rounded-none" disabled>
              Checkout
            </button>
          }

        </footer>
      </div>
    </div>
  );
}
