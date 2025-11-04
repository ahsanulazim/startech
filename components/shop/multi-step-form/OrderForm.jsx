export default function OrderForm() {
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
