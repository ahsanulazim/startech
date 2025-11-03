export default function OrderForm() {
  return (
    <form className="fieldset bg-base-200 w-full max-w-xs mx-auto border border-base-300 p-4 rounded-md my-5">
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="input"
        placeholder="Your Name"
      />

      <label className="label" htmlFor="address">
        Address
      </label>
      <input
        type="text"
        name="address"
        className="input"
        placeholder="Your Address"
      />

      <label className="label" htmlFor="district">
        District
      </label>
      <select defaultValue="Pick a color" className="select" name="district">
        <option disabled={true}>District</option>
        <option>Dhaka</option>
        <option>Mymensingh</option>
        <option>Rajshahi</option>
        <option>Sylhet</option>
        <option>Rangpur</option>
        <option>Chittagong</option>
        <option>Khulna</option>
        <option>Barisal</option>
      </select>
      <label className="label" htmlFor="phone">
        Phone
      </label>
      <input
        type="tel"
        className="input"
        placeholder="01XXXXXXXXX"
        name="phone"
      />
      <label className="label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        className="input"
        placeholder="user@mail.com"
        name="email"
      />
    </form>
  );
}
