import { Activity } from "react";
import Required from "./Required";

export default function OrderForm({ setOrderData, error, orderData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="fieldset w-full mb-5">
      <h1 className="text-center text-xl font-semibold">Your Details</h1>

      <label className="label" htmlFor="name">
        Name<Required />
      </label>
      <input
        type="text"
        name="name"
        className="input w-full"
        onChange={handleChange}
        value={orderData.name || ""}
      />
      <Activity when={!!error?.name}>
        <p className="text-red-500 text-sm">{error.name}</p>
      </Activity>

      <label className="label" htmlFor="address">
        Address<Required />
      </label>
      <input
        type="text"
        name="address"
        className="input w-full"
        onChange={handleChange}
        value={orderData.address || ""}
      />
      <Activity when={!!error?.address}>
        <p className="text-red-500 text-sm">{error.address}</p>
      </Activity>

      <label className="label" htmlFor="district">
        District<Required />
      </label>
      <select
        name="district"
        className="select w-full"
        onChange={handleChange}
        value={orderData.district || "Select District"}
      >
        <option disabled>Select District</option>
        <option>Dhaka</option>
        <option>Mymensingh</option>
        <option>Rajshahi</option>
        <option>Sylhet</option>
        <option>Rangpur</option>
        <option>Chittagong</option>
        <option>Khulna</option>
        <option>Barisal</option>
      </select>
      <Activity when={!!error?.district}>
        <p className="text-red-500 text-sm">{error.district}</p>
      </Activity>

      <label className="label" htmlFor="phone">
        Phone<Required />
      </label>
      <input
        type="tel"
        name="phone"
        className="input w-full"
        onChange={handleChange}
        value={orderData.phone || ""}
      />
      <Activity when={!!error?.phone}>
        <p className="text-red-500 text-sm">{error.phone}</p>
      </Activity>

      <label className="label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        className="input w-full"
        onChange={handleChange}
        value={orderData.email || ""}
      />
      <Activity when={!!error?.email}>
        <p className="text-red-500 text-sm">{error.email}</p>
      </Activity>
    </form>
  );
}
