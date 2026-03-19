export default function RaiseQuery() {
  return (
    <div className="card">
      <h2>Raise New Query</h2>

      <div className="form-group">
        <label>Supplier</label>
        <select>
          <option>Select Supplier</option>
          <option>ABC Foods</option>
        </select>
      </div>

      <div className="form-group">
        <label>Query Type</label>
        <select>
          <option>Select Type</option>
          <option>Allergen Info</option>
          <option>HACCP Certificate</option>
        </select>
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Enter details..." />
      </div>

      <button>Submit Query</button>
    </div>
  );
}