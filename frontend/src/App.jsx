import { useState } from "react";
import AddressForm from "./components/AddressForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <AddressForm onResult={(r) => setResult(r)} />
      <ResultCard result={result} />
    </div>
  );
}
