import Product from "@/components/shop/Product";
import Tabs from "@/components/shop/Tabs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import { notFound } from "next/navigation";

export default async function page({ params }) {
  const { product } = params;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${product}`);
    if (!res.ok) {
      // handle 404 or other errors gracefully
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const prod = await res.json();

    return (
      <main className="bg-base-300">
        <Section>
          <Breadcrumbs title={prod.title} />
          <Product product={prod} />
        </Section>
        <Section>
          <Tabs description={prod.description} title={prod.title} />
        </Section>
      </main>
    );
  } catch (err) {
    // fallback UI if product not found or API fails
    notFound();
  }
}
