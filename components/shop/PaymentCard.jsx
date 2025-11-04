"use client";

import { useState } from "react";

export default function PaymentCard({ product }) {
  const [selected, setSelected] = useState("cash");

  return (
    <>
      <div
        className={`flex items-center gap-2 bg-base-100 p-3 rounded-lg border-2 cursor-pointer grow ${
          selected === "cash" ? "border-second" : "border-base-300"
        }`}
        onClick={() => setSelected("cash")}
      >
        <input
          type="radio"
          name="radio-12"
          checked={selected === "cash"}
          onChange={() => setSelected("cash")}
          className="radio checked:bg-blue-200 checked:text-second checked:border-second"
        />
        <div>
          <h4 className="text-xl font-semibold">
            <span lang="bn">৳</span>
            {product.price}
          </h4>
          <p className="text-xs lg:text-sm">Cash Discount Price</p>
          <p className="text-xs lg:text-sm">Online / Cash Payment</p>
        </div>
      </div>
      <div
        className={`flex items-center gap-2 bg-base-100 p-3 rounded-lg border-2 cursor-pointer grow ${
          selected === "installment" ? "border-second" : "border-base-300"
        }`}
        onClick={() => setSelected("installment")}
      >
        <input
          type="radio"
          name="radio-12"
          checked={selected === "installment"}
          onChange={() => setSelected("installment")}
          className="radio checked:bg-blue-200 checked:text-second checked:border-second"
        />
        <div>
          <h4 className="text-xl font-semibold">
            <span lang="bn">৳</span>
            {(product.price / 12).toFixed(2)}/month
          </h4>
          <p className="text-xs lg:text-sm">Regular Price</p>
          <p className="text-xs lg:text-sm">0% EMI for up to 12 Months</p>
        </div>
      </div>
    </>
  );
}
