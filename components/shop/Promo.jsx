"use client";

import { useState } from "react";

export default function Promo() {
  const [promo, setPromo] = useState("");

  return (
    <form className="fieldset w-full max-w-xs">
      <div className="join">
        <input
          type="text"
          className="input join-item focus:outline-none"
          placeholder="Promo Code"
          name="promo"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
        />
        <button
          className="btn btn-primary join-item"
          disabled={!promo.trim()}
          onClick={(e) => e.preventDefault()}
        >
          Apply
        </button>
      </div>
    </form>
  );
}
