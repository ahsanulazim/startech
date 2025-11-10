"use client";

import OrderForm from "./OrderForm";
import { Activity, useContext, useState } from "react";
import Payment from "./Payment";
import Thanks from "./Thanks";
import Link from "next/link";
import { SiteContext } from "@/context/MyContext";
import Steps from "./Steps";

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
          <Steps step={step} />
        </div>
        <div className="bg-base-100 w-full max-w-sm mx-auto p-5 mt-5 rounded-md">
          <Activity mode={step === 0 ? "visible" : "hidden"}>
            <OrderForm setOrderData={setOrderData} error={error} />
          </Activity>
          <Activity mode={step === 1 ? "visible" : "hidden"}>
            <Payment total={total} orderData={orderData} />
          </Activity>
          <Activity mode={step === 2 ? "visible" : "hidden"}>
            <Thanks />
          </Activity>

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
