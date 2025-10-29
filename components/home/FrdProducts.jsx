"use client";

import { useContext } from "react";
import ProductCard from "../shop/ProductCard";
import Section from "../ui/Section";
import Title from "../ui/Title";
import { SiteContext } from "@/context/MyContext";

export default function FrdProducts() {
  //   const { products } = useContext(SiteContext);

  const t = {
    heading: "Featured Products",
    subHeading: "Check & Get Your Desired Product!",
  };

  return (
    <Section>
      <Title heading={t.heading} subHeading={t.subHeading} />
      {/* {products ? (
        products.map((product) => <ProductCard key={product.id} />)
      ) : (
        <div>Loading</div>
      )} */}
    </Section>
  );
}
