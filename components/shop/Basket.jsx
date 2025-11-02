"use client";

import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { SiteContext } from "@/app/context/MyContext";
import { useContext } from "react";

export default function Basket({ className, indicator }) {
  const { totalQuantity } = useContext(SiteContext);

  return (
    <div className="indicator">
      <span
        className={`indicator-item indicator-start badge badge-sm  ${
          indicator
            ? "bg-accent border-accent text-white"
            : "bg-transparent border-0 font-semibold text-accent px-0"
        }`}
      >
        {totalQuantity}
      </span>
      <label
        htmlFor="my-drawer-5"
        className={`drawer-button ${className ? className : ""}`}
      >
        <FaShoppingBasket />
      </label>
    </div>
  );
}
