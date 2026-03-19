import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Supplier Dashboard</h1>

      <div>
        <p>Total Suppliers: 120</p>
        <p>High Risk: 10</p>
        <p>Pending Queries: 25</p>
      </div>

      <table border="1" cellPadding="10">
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
            <td style={{ color: "red" }}>High</td>
            <td>2 Expired</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>

      <br />
      <Link to="/raise">Raise Query</Link> |{" "}
      <Link to="/tracking">Track Queries</Link>
    </div>
  );
}