"use client";

import { useContext } from "react";
import ProductCard from "../shop/ProductCard";
import Section from "../ui/Section";
import Title from "../ui/Title";
import { SiteContext } from "@/app/context/MyContext";

export default function FrdProducts() {
  const { products } = useContext(SiteContext);

  const t = {
    heading: "Featured Products",
    subHeading: "Check & Get Your Desired Product!",
  };

  return (
    <Section>
      <Title heading={t.heading} subHeading={t.subHeading} />
      <div className="grid grid-cols-5 gap-5">
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
