"use client";
import { useState } from "react";
import "./quantity.css";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // 1 এর নিচে নামবে না

  return (
    <div className="flex items-center">
      {/* Minus Button */}
      <button onClick={decrease} className="btn btn-square border-base-300 btn-outline">
        <FaMinus />
      </button>

      {/* Input Field */}
      <input
        type="number"
        className="input w-12 text-center quantity border-base-300"
        value={quantity}
        onChange={(e) => {
          const val = parseInt(e.target.value) || 1;
          setQuantity(val < 1 ? 1 : val);
        }}
      />

      {/* Plus Button */}
      <button onClick={increase} className="btn btn-square border-base-300 btn-outline">
        <FaPlus />
      </button>
    </div>
  );
}
