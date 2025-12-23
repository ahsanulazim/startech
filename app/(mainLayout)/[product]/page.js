import Product from "@/components/shop/Product";
import Tabs from "@/components/shop/Tabs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import { notFound } from "next/navigation";

export default async function page({ params }) {
  const { product } = await params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FAKE_STORE_API}/products/${product}`, {
      cache: "no-store",
    });
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
