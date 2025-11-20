export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="result-card">
      <h3>Score: {result.score}/100</h3>
      <p>Status: {result.valid ? "Deliverable" : "Potential Issue"}</p>

      <h4>Checks:</h4>
      <ul>
        {result.checks.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>

      <h4>Suggestions (From Pincode):</h4>
      <p>
        {result.suggestions.Name}, {result.suggestions.District},{" "}
        {result.suggestions.State}
      </p>
    </div>
  );
}
