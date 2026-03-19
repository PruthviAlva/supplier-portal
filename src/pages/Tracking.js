import { Link } from "react-router-dom";

export default function Tracking() {
  return (
    <div className="container">
      <h1>Query Tracking</h1>

      <div className="flex">
        <button>Pending</button>
        <button>In Review</button>
        <button>Resolved</button>
      </div>

      <div className="card">
        <table>
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
              <td><span className="badge yellow">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <Link to="/detail"><button>View Detail</button></Link>
    </div>
  );
}