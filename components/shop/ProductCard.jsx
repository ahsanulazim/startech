import Link from "next/link";
import Buy from "./Buy";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <Link href={`/${product.id}`} className="p-5">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-md aspect-square object-contain"
        />
      </Link>
      <div className="card-body border-t border-t-base-300">
        <h2 className="card-title text-base line-clamp-1">
          <Link href={`/${product.id}`}>{product.title}</Link>
        </h2>
        <p className="line-clamp-3 text-gray-600">{product.description}</p>
        <div className="card-actions">
          <p className="text-lg text-accent font-semibold text-center">
            ${product.price}
          </p>
          <Buy className="w-full btn-soft btn-main-style" pid={product.id} />
        </div>
      </div>
    </div>
  );
}
