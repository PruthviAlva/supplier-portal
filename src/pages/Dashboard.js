export default function Dashboard() {
  return (
    <div>
      <div className="topbar">
        <h1>Dashboard</h1>
        <input placeholder="Search supplier..." style={{ width: "220px" }} />
      </div>

      <div className="stats">
        <div className="card stat">
          <h3>120</h3>
          <p>Total Suppliers</p>
        </div>

        <div className="card stat">
          <h3>10</h3>
          <p>High Risk</p>
        </div>

        <div className="card stat">
          <h3>25</h3>
          <p>Pending Queries</p>
        </div>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Risk</th>
              <th>Certificates</th>
              <th>Queries</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC Foods</td>
              <td><span className="badge red">High</span></td>
              <td>2 Expired</td>
              <td>5</td>
            </tr>
            <tr>
              <td>XYZ Pvt Ltd</td>
              <td><span className="badge green">Low</span></td>
              <td>Valid</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}