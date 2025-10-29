"use client";
import { createContext, useEffect, useState } from "react";

export const SiteContext = createContext();

export default function MyContext({ children }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const data = {
    products,
  };

  return <MyContext value={data}>{children}</MyContext>;
}
