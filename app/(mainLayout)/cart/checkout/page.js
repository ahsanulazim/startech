"use client";

import { SiteContext } from "@/context/MyContext";
import OrderConfirm from "@/components/shop/multi-step-form/OrderConfirm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Checkout() {
  const router = useRouter();
  const { cartedProducts, loading } = useContext(SiteContext);

  console.log(cartedProducts);

  useEffect(() => {
    if (!loading && cartedProducts.length === 0) {
      router.push("/");
    }
  }, [cartedProducts, router, loading]);

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
