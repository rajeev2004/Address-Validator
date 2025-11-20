import { useState } from "react";
import { validateAddress } from "../api/validateAddress";

export default function AddressForm({ onResult }) {
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await validateAddress(form);
    onResult(res);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Address Validator</h2>

      <input
        name="address"
        placeholder="Full Address"
        onChange={handleChange}
      />

      <input name="city" placeholder="City" onChange={handleChange} />

      <input name="state" placeholder="State" onChange={handleChange} />

      <input name="pincode" placeholder="Pincode" onChange={handleChange} />

      <button type="submit">Validate</button>
    </form>
  );
}
