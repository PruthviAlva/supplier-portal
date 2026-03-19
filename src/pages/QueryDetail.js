export default function QueryDetail() {
  return (
    <div className="container">
      <div className="card">
        <h2>Query Detail</h2>

        <div style={{ marginBottom: "10px" }}>
          <b>QA:</b> Please upload certificate
        </div>

        <div style={{ marginBottom: "10px" }}>
          <b>Supplier:</b> Uploading today
        </div>

        <input placeholder="Type message..." />
        <br /><br />
        <button>Send</button>
      </div>
    </div>
  );
}