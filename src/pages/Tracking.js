import { Link } from "react-router-dom";

export default function Tracking() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Query Tracking</h1>

      <button>Pending</button>
      <button>In Review</button>
      <button>Resolved</button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Query</th>
            <th>Supplier</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HACCP Cert</td>
            <td>ABC Foods</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>

      <Link to="/detail">View Detail</Link>
    </div>
  );
}