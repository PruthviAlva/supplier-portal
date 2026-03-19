import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RaiseQuery from "./pages/RaiseQuery";
import Tracking from "./pages/Tracking";
import QueryDetail from "./pages/QueryDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/raise" element={<RaiseQuery />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/detail" element={<QueryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;