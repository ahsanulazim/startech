import { FaBox, FaCreditCard, FaTruck } from "react-icons/fa6";
import OrderForm from "./OrderForm";

export default function OrderConfirm() {
  return (
    <>
      <div className="bg-base-100 rounded-md p-4">
        <div className="flex justify-center">
          <ul className="steps">
            <li className="step step-neutral">
              <span className="step-icon bg-second">
                <FaTruck />
              </span>
              Shipping
            </li>
            <li className="step">
              <span className="step-icon">
                <FaCreditCard />
              </span>
              Payment
            </li>
            <li className="step">
              <span className="step-icon">
                <FaBox />
              </span>
              Confirmation
            </li>
          </ul>
        </div>
        <OrderForm />
        <div className="flex justify-center gap-5 max-w-xs mx-auto">
          <button className="btn btn-outline flex-1">Cart</button>
          <button className="btn btn-filled-style text-white flex-1">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
