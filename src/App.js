import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RaiseQuery from "./pages/RaiseQuery";
import Tracking from "./pages/Tracking";
import QueryDetail from "./pages/QueryDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Sidebar */}
        <div className="sidebar">
          <h2>Supplier Portal</h2>

          <Link to="/">Dashboard</Link>
          <Link to="/raise">Raise Query</Link>
          <Link to="/tracking">Query Tracking</Link>
        </div>

        {/* Main Content */}
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/raise" element={<RaiseQuery />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/detail" element={<QueryDetail />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;