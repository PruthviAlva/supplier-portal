import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="space-between">
        <h1>Supplier Dashboard</h1>
        <input placeholder="Search supplier..." style={{ width: "200px" }} />
      </div>

      <div className="flex">
        <div className="card">Total Suppliers: 120</div>
        <div className="card">High Risk: 10</div>
        <div className="card">Pending Queries: 25</div>
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

      <br />
      <Link to="/raise"><button>Raise Query</button></Link>
      <Link to="/tracking"><button style={{ marginLeft: "10px" }}>Track Queries</button></Link>
    </div>
  );
}