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
        <option disabled={true}>Pick a color</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
      <label className="label">Author</label>
      <input type="text" className="input" placeholder="Name" />
      <label className="label">Author</label>
      <input type="text" className="input" placeholder="Name" />
    </form>
  );
}
