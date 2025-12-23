'use client'

import { useQuery } from "@tanstack/react-query";
import ProductCard from "../shop/ProductCard";
import Section from "../ui/Section";
import Title from "../ui/Title";

export default function FrdProducts() {

  const { data: products, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    }
  })

  const t = {
    heading: "Featured Products",
    subHeading: "Check & Get Your Desired Product!",
  };

  return (
    <Section>
      <Title heading={t.heading} subHeading={t.subHeading} />
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </Section>
  );
}
