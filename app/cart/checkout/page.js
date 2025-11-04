'use client'

import { SiteContext } from "@/app/context/MyContext";
import OrderConfirm from "@/components/shop/multi-step-form/OrderConfirm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import { redirect } from "next/navigation";
import { useContext } from "react";

export default function Checkout() {

  const { cartedProducts } = useContext(SiteContext);
  console.log(cartedProducts);

  if (cartedProducts.length === 0) {
    return redirect('/cart');
  }

  return (
    <main className="bg-base-300 pb-5">
      <Section>
        <Breadcrumbs title="Cart" subtitle="Checkout" />
      </Section>
      <Section>
        <OrderConfirm />
      </Section>
    </main>
  );
}
