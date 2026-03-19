export default function Tracking() {
  return (
    <div>
      <div className="topbar">
        <h1>Query Tracking</h1>
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
              <td>HACCP Certificate</td>
              <td>ABC Foods</td>
              <td><span className="badge yellow">Pending</span></td>
            </tr>
            <tr>
              <td>Allergen Info</td>
              <td>XYZ Pvt Ltd</td>
              <td><span className="badge green">Resolved</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}