export default function RaiseQuery() {
  return (
    <div className="container">
      <div className="card">
        <h2>Raise New Query</h2>

        <label>Supplier</label>
        <select>
          <option>Select Supplier</option>
          <option>ABC Foods</option>
        </select>

        <label>Query Type</label>
        <select>
          <option>Select Type</option>
          <option>Allergen Info</option>
          <option>HACCP Certificate</option>
        </select>

        <label>Message</label>
        <textarea placeholder="Enter your message" />

        <br /><br />
        <button>Submit Query</button>
      </div>
    </div>
  );
}