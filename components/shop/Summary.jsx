import Link from "next/link";

export default function Summary({ total }) {
  return (
    <div className="flex justify-end max-md:fixed max-md:w-full left-0 bottom-16 md:col-span-2 bg-base-100 rounded-t-md max-md:z-50 md:rounded-md p-4">
      <div className="w-full">
        <h2 className="max-md:hidden text-xl lg:text-3xl font-bold mb-5">
          Summary
        </h2>
        <div className="max-md:flex max-md:items-center max-md:justify-end max-md: gap-5">
          <div className="max-md:hidden flex justify-between mb-3 text-sm lg:text-base">
            <div className="text-black/60">Sub Total</div>
            <div className="font-bold">৳{total}</div>
          </div>
          <div className="flex justify-between md:mb-3 gap-2 text-sm lg:text-base">
            <div className="text-black/60">Total</div>
            <div className="font-bold">৳{total}</div>
          </div>
          <Link href="/cart/checkout">
            <button className="btn btn-primary btn-filled-style md:w-full">
              Confirm Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
