export default function RaiseQuery() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Raise Query</h1>

      <select>
        <option>Select Supplier</option>
        <option>ABC Foods</option>
      </select>

      <br /><br />

      <select>
        <option>Query Type</option>
        <option>Allergen Info</option>
        <option>HACCP Certificate</option>
      </select>

      <br /><br />

      <textarea placeholder="Enter message" />

      <br /><br />

      <button>Submit</button>
    </div>
  );
}