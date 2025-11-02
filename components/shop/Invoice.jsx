"use client";

import { SiteContext } from "@/app/context/MyContext";
import Link from "next/link";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa6";

export default function Invoice() {
  const { cartedProducts, removeFromCart, updateQuantity } =
    useContext(SiteContext);

  return (
    <div className="overflow-x-auto my-5">
      <table className="table">
        {/* head */}
        <thead className="bg-base-300">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="max-sm:hidden">Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartedProducts.map((product) => (
            <tr className="hover:bg-base-300" key={product.id}>
              <td>
                <Link
                  href={`/${product.id}`}
                  className="flex items-center gap-3"
                >
                  <div className="max-xs:hidden avatar">
                    <div className="mask mask-squircle size-12">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold hover:link line-clamp-2">
                      {product.title}
                    </div>
                  </div>
                </Link>
              </td>
              <td>
                <div className="flex gap-3">
                  <input
                    type="number"
                    className="input max-w-12"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, e.target.value)}
                  />
                  <button
                    className="btn btn-error"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
              <td className="max-sm:hidden">{product.price}</td>
              <td>{(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
