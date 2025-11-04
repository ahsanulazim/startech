import { Activity } from "react";

export default function OrderForm({ setOrderData, error, orderData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="fieldset w-full max-w-xs mx-auto mb-5">
      <h1 className="text-center text-xl font-semibold">Your Details</h1>

      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChange}
        value={orderData.name || ""}
      />
      <Activity when={!!error?.name}>
        <p className="text-red-500 text-sm">{error.name}</p>
      </Activity>

      <label className="label" htmlFor="address">
        Address
      </label>
      <input
        type="text"
        name="address"
        className="input"
        onChange={handleChange}
        value={orderData.address || ""}
      />
      <Activity when={!!error?.address}>
        <p className="text-red-500 text-sm">{error.address}</p>
      </Activity>

      <label className="label" htmlFor="district">
        District
      </label>
      <select
        name="district"
        className="select"
        onChange={handleChange}
        value={orderData.district || "Select Disctrict"}
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
        Phone
      </label>
      <input
        type="tel"
        name="phone"
        className="input"
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
        className="input"
        onChange={handleChange}
        value={orderData.email || ""}
      />
      <Activity when={!!error?.email}>
        <p className="text-red-500 text-sm">{error.email}</p>
      </Activity>
    </form>
  );
}
