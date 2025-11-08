"use client";

export default function ProfileForm() {
  return (
    <div>
      <form className="fieldset" onSubmit={(e) => e.preventDefault()}>
        <label className="fieldset-legend" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          className="input w-full"
          placeholder="Type here"
          name="name"
        />
        <label className="fieldset-legend">Phone</label>
        <input
          type="tel"
          className="input w-full"
          placeholder="Type here"
          name="phone"
        />
        <label className="fieldset-legend">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Type here"
          name="email"
        />
        <label className="fieldset-legend">Address</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Type here"
          name="address"
        />
        <label className="fieldset-legend" htmlFor="district">
          District
        </label>
        <select
          name="district"
          className="select w-full"
          defaultValue="Select District"
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
        <button type="submit" className="btn btn-primary btn-filled-style">
          Edit
        </button>
      </form>
    </div>
  );
}
