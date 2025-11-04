"use client";
import {
  FaCheck,
  FaCreditCard,
  FaRegCreditCard,
  FaTruck,
} from "react-icons/fa6";
import { RiArchiveFill, RiArchiveLine } from "react-icons/ri";
import OrderForm from "./OrderForm";
import { useContext, useState } from "react";
import Payment from "./Payment";
import Thanks from "./Thanks";
import Link from "next/link";
import { SiteContext } from "@/app/context/MyContext";

export default function OrderConfirm() {
  const [step, setStep] = useState(0);
  const [orderData, setOrderData] = useState({});
  const [error, setError] = useState({});

  const { total } = useContext(SiteContext);

  const handleNext = () => {
    if (step === 0) {
      let newErrors = {};

      if (!orderData.name) newErrors.name = "Name is required";
      if (!orderData.address) newErrors.address = "Address is required";
      if (!orderData.district) newErrors.district = "District is required";

      const phoneRegex = /^01[3-9]\d{8}$/;
      if (!orderData.phone) {
        newErrors.phone = "Phone is required";
      } else if (!phoneRegex.test(orderData.phone)) {
        newErrors.phone = "Invalid Bangladeshi phone number";
      }

      if (orderData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(orderData.email)) {
          newErrors.email = "Invalid email address";
        }
      }
      setError(newErrors);
      if (Object.keys(newErrors).length > 0) return;
    }
    setStep((prev) => prev + 1);
  };

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
              className={`step before:h-1 ${
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
                {step === 1 ? (
                  <FaCreditCard />
                ) : step < 1 ? (
                  <FaRegCreditCard />
                ) : (
                  <FaCheck />
                )}
              </span>
              Payment
            </li>
            <li
              className={`step before:h-1 ${
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
                {step === 2 ? (
                  <RiArchiveFill />
                ) : step < 2 ? (
                  <RiArchiveLine />
                ) : (
                  <FaCheck />
                )}
              </span>
              Confirmation
            </li>
          </ul>
        </div>
        <div className="bg-base-100 w-full max-w-xs mx-auto p-5 mt-5 rounded-md">
          {step === 0 && (
            <OrderForm
              setOrderData={setOrderData}
              error={error}
              orderData={orderData}
            />
          )}
          {step === 1 && <Payment total={total} />}
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
                onClick={handleNext}
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
