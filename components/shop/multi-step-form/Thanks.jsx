import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Thanks() {
  return (
    <>
      <div className="flex justify-center">
        <FaCircleCheck className="text-second text-6xl" />
      </div>
      <div className="my-5">
        <h1 className="text-xl text-center font-semibold">Order Confirmed</h1>
        <p className="text-center">Thank you for Ordering from Star Tech.</p>
      </div>
    </>
  );
}
