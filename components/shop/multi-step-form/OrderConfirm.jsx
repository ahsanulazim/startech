"use client";
import { FaBox, FaCheck, FaCreditCard, FaTruck } from "react-icons/fa6";
import OrderForm from "./OrderForm";
import { useState } from "react";
import Payment from "./Payment";
import Thanks from "./Thanks";
import Link from "next/link";

export default function OrderConfirm() {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <ul className="steps">
            <li className="step step-neutral">
              <span className="step-icon bg-second">
                {step === 0 ? <FaTruck /> : <FaCheck />}
              </span>
              Shipping
            </li>
            <li
              className={`step ${
                step >= 1
                  ? "step-neutral before:bg-second"
                  : "before:bg-base-100"
              }`}
            >
              <span
                className={`step-icon ${
                  step >= 1 ? "bg-second" : "bg-base-100"
                }`}
              >
                {step <= 1 ? <FaCreditCard /> : <FaCheck />}
              </span>
              Payment
            </li>
            <li
              className={`step ${
                step >= 2
                  ? "step-neutral before:bg-second"
                  : "before:bg-base-100"
              }`}
            >
              <span
                className={`step-icon ${
                  step >= 2 ? "bg-second" : "bg-base-100"
                }`}
              >
                {step <= 2 ? <FaBox /> : <FaCheck />}
              </span>
              Confirmation
            </li>
          </ul>
        </div>
        <div className="bg-base-100 w-full max-w-xs mx-auto p-5 mt-5 rounded-md">
          {step === 0 && <OrderForm />}
          {step === 1 && <Payment />}
          {step === 2 && <Thanks />}
          <div className="flex justify-center gap-5 max-w-xs mx-auto">
            <button
              className="btn btn-outline flex-1"
              disabled={step === 0 && true}
              onClick={() => setStep((prev) => prev - 1)}
            >
              Back
            </button>
            {step === 2 ? (
              <Link href="/" className="btn btn-filled-style flex-1">
                <button className="cursor-pointer">Buy More</button>
              </Link>
            ) : (
              <button
                className="btn btn-filled-style flex-1"
                onClick={() => setStep((prev) => prev + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
