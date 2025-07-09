import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardLanding from "./pages/DasboardLanding";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        {/* You can still add other routes if you want: */}
        {/* <Route path="/auth" element={<AuthPage />} /> */}
        <Route path="/dashboard" element={<DashboardLanding />} />
      </Routes>
    </Router>
  );
}

export default App;