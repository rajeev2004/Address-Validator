import axios from "axios";

export const validateAddress = async (payload) => {
  const res = await axios.post(
    "http://localhost:5000/api/address/validate",
    payload
  );
  return res.data;
};
