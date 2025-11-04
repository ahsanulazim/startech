import { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";

export default function Payment({ total, orderData }) {
  const [isChecked, setChecked] = useState("taka");

  const paymentMethods = [
    { id: "taka", label: "Cash on Delivery", icon: "/payment/taka.svg" },
    { id: "bkash", label: "bKash", icon: "/payment/bkash.svg" },
    { id: "rocket", label: "Rocket", icon: "/payment/rocket.svg" },
    { id: "nagad", label: "Nagad", icon: "/payment/nagad.svg" },
    { id: "upay", label: "Upay", icon: "/payment/upay.svg" },
    {
      id: "other card",
      label: "Other Cards & MFS",
      icon: "/payment/creditcard.svg",
    },
  ];

  return (
    <div>
      <h1 className="text-center font-semibold text-xl">Payment Options</h1>
      <div className="flex flex-col gap-5 my-5">
        <div className="card border-2 border-base-300 bg-base-100 w-full shadow-sm">
          <div className="card-body p-5">
            <div className="flex justify-between items-center gap-5">
              <div>
                <h2 className="card-title">{orderData.name}</h2>
                <p>{orderData.address}, {orderData.district}</p>
              </div>
              <button className="btn btn-sm btn-filled-style">
                <FaPenToSquare />
              </button>
            </div>
            <div className="divider my-0"></div>
            <div className="flex justify-between gap-5 text-base">
              <p>Total</p>
              <p className="text-right font-semibold">
                <span lang="bn">৳</span>
                {total}
              </p>
            </div>
          </div>
        </div>
        <div className="card border-2 border-base-300 bg-base-100 w-full shadow-sm">
          <div className="card-body p-5">
            <h2 className="card-title">Payment Method</h2>
            <ul>
              {paymentMethods.map((method) => (
                <li
                  key={method.id}
                  className={`flex hover:bg-base-300 cursor-pointer ${isChecked === method.id ? "bg-base-300" : ""
                    } items-center p-2 rounded-md`}
                  onClick={() => setChecked(method.id)}
                >
                  <div>
                    <img
                      className="size-8 p-1"
                      src={method.icon}
                      alt={method.label}
                    />
                  </div>
                  <div className="grow">{method.label}</div>
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.id}
                    checked={isChecked === method.id ? true : false}
                    className="radio radio-xs radio-second"
                    readOnly
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
