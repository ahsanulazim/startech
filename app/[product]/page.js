import Product from "@/components/shop/Product";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";

export default function page() {
  return (
    <>
      <Section>
        <Breadcrumbs />
        <Product />
      </Section>
    </>
  );
}
