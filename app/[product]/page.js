import Product from "@/components/shop/Product";
import Tabs from "@/components/shop/Tabs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";

export default async function page({ params }) {
  const { product } = await params;
  const prod = await fetch(`https://fakestoreapi.com/products/${product}`).then(
    (res) => res.json()
  );

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
}
