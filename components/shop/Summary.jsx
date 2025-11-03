export default function Summary({ total }) {
  return (
    <div className="flex justify-end md:col-span-2 bg-base-100 rounded-md p-4">
      <div className="w-full">
        <h1 className="text-xl lg:text-3xl font-bold mb-5">Summary</h1>
        <div className="flex justify-between mb-3 text-sm lg:text-base">
          <div className="text-black/60">Sub Total</div>
          <div className="font-bold">৳{total}</div>
        </div>
        <div className="flex justify-between mb-3 text-sm lg:text-base">
          <div className="text-black/60">Total</div>
          <div className="font-bold">৳{total}</div>
        </div>
        <button className="btn btn-primary btn-filled-style w-full">
          Checkout
        </button>
      </div>
    </div>
  );
}
