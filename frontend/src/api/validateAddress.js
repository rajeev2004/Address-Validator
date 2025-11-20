import axios from "axios";

export const validateAddress = async (payload) => {
  const res = await axios.post(
    "https://address-validator-eaex.onrender.com/api/address/validate",
    payload
  );
  return res.data;
};
