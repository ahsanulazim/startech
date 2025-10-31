import Link from "next/link";

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
        <h2 className="card-title text-base truncate line-clamp-2">
          <Link href={`/${product.id}`}>{product.title}</Link>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <p className="text-lg text-accent font-semibold text-center">
            ${product.price}
          </p>
          <button className="btn btn-primary w-full btn-soft btn-main-style">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
