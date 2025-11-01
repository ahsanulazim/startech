import Chips from "../ui/Chips";
import Gallery from "../ui/Gallery";
import PaymentCard from "./PaymentCard";

export default function Product() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
      <Gallery />
      <div className="md:col-span-4">
        <h1 className="text-second text-xl font-semibold mb-2">
          Colorful GeForce GT710-2GD3-V 2GB Graphics Card
        </h1>
        <div className="flex flex-wrap gap-2 mb-5">
          <Chips />
          <Chips />
          <Chips />
          <Chips />
          <Chips />
        </div>
        <div className="mb-3">
          <h2 className="font-semibold">Key Features</h2>
          <ul>
            <li>MPN: 212327093804</li>
            <li>Model: Colorful GeForce GT710-2GD3-V</li>
            <li>Single Fan</li>
            <li>No Power Supply</li>
            <li>Powered by GeForce GT710</li>
            <li>Integrated with 2GB GDDR5 64-bit</li>
          </ul>
          <a href="#" className="link text-accent">
            View More Info
          </a>
        </div>
        <div>
          <h3 className="font-semibold">Payment Options</h3>
          <div className="flex max-md:flex-col gap-3 mt-3">
            <PaymentCard />
          </div>
        </div>
      </div>
    </div>
  );
}
