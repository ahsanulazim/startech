import Invoice from "@/components/shop/Invoice";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <Section>
        <Breadcrumbs title="Cart" />
        <div className="bg-base-100 p-4 rounded-md">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          {cartedProducts.length > 0 ? (
            <>
              <Invoice />
              <div>
                <span>Total: </span>
                <span>{total}</span>
              </div>
            </>
          ) : (
            <>
              <img
                src="/empty-cart.svg"
                alt="empty cart"
                className="max-w-80 mx-auto"
              />
              <div className="text-center">
                <h2 className="mb-5">Shopping Cart is Empty!</h2>
                <Link href="/">
                  <button className="btn btn-primary">Start Shopping</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Section>
    </main>
  );
}
