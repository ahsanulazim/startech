"use client";

import { useEffect, useState } from "react";

export default function ComparisonCard({ selectedIds }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const responses = await Promise.all(
        selectedIds.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        )
      );
      setProducts(responses);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-base-100 rounded-md p-3 xs:p-5 flex flex-col">
      <div className="flex justify-between gap-3 xs:gap-5 mb-3">
        {products ? (
          products.map((p) => (
            <div key={p.id} className="flex-1">
              <figure className="bg-base-300 aspect-square p-5 flex place-content-center rounded-lg">
                <img src={p.image} alt={p.title} className="w-full object-contain" />
              </figure>
              <div className="h-12 xs:h-16">
                <h3 className="text-xs xs:text-sm w-full">{p.title}</h3>
              </div>
              <p className="text-accent font-bold max-xs:text-sm">${p.price}</p>

            </div>
          ))
        ) : (
          <div>loading..</div>
        )}
      </div>
      <button className="btn btn-soft btn-primary w-full bg-second/10 hover:bg-second text-second hover:text-white shadow-none">Comparison</button>
    </div>
  );
}
