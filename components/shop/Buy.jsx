"use client";
import { SiteContext } from "@/app/context/MyContext";
import { useContext } from "react";

export default function Buy({ pid, className }) {
  const { addToCart } = useContext(SiteContext);

  return (
    <button
      className={`btn btn-primary ${className ? className : ""}`}
      onClick={() => addToCart(pid)}
    >
      Buy Now
    </button>
  );
}
