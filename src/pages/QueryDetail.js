export default function QueryDetail() {
  return (
    <div className="card">
      <h2>HACCP Certificate Query</h2>

      <div style={{ marginTop: "16px" }}>
        <p><b>QA:</b> Please upload latest certificate.</p>
        <p><b>Supplier:</b> Uploading by today.</p>
      </div>

      <div className="form-group">
        <input placeholder="Write a reply..." />
      </div>

      <button>Send</button>
    </div>
  );
}