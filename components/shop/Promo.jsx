"use client";

import { useState } from "react";

export default function Promo() {
  const [promo, setPromo] = useState("");

  return (
    <form className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-2">
      <div className="join">
        <input
          type="text"
          className="input join-item focus:outline-none"
          placeholder="Promo Code"
          name="promo"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
        />
        <button className="btn btn-primary join-item" disabled={!promo.trim()}>
          Apply
        </button>
      </div>
    </form>
  );
}
