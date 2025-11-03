import OrderConfirm from "@/components/shop/OrderConfirm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";

export default function page() {
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
