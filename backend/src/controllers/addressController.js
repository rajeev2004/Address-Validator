import axios from "axios";
import scoreAddress from "../utils/scoreAddress.js";

export const validateAddress = async (req, res) => {
  try {
    const { address, city, state, pincode } = req.body;

    if (!pincode) {
      return res.status(400).json({ error: "Pincode is required" });
    }

    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    const response = await axios.get(url);
    const data = response.data[0];

    if (data.Status !== "Success") {
      return res.json({
        valid: false,
        reason: "Invalid or unknown pincode",
        score: 20
      });
    }

    const postalInfo = data.PostOffice[0];

    const { score, checks } = scoreAddress({
      address,
      city,
      state,
      pincodeCity: postalInfo.District,
      pincodeState: postalInfo.State
    });

    res.json({
      valid: score > 50,
      score,
      suggestions: postalInfo,
      checks
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
