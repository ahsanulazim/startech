import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import CartOverview from "@/components/shop/CartOverview";

export default function cart() {
  return (
    <main className="bg-base-300">
      <Section>
        <Breadcrumbs title="Cart" />
        <CartOverview />
      </Section>
    </main>
  );
}
