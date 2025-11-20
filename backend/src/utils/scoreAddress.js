export default function scoreAddress({ address, city, state, pincodeCity, pincodeState }) {
  let score = 100;
  const checks = [];

  if (!address || address.length < 6) {
    score -= 30;
    checks.push("Address seems too short");
  }

  if (city && city.toLowerCase() !== pincodeCity.toLowerCase()) {
    score -= 25;
    checks.push("City doesn't match pincode region");
  }

  if (state && state.toLowerCase() !== pincodeState.toLowerCase()) {
    score -= 20;
    checks.push("State doesn't match pincode region");
  }

  if (!(/\d/.test(address))) {
    score -= 15;
    checks.push("Missing house/flat number");
  }

  return { score, checks };
}
