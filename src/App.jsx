import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Clubs from "./pages/Clubs";
import Products from "./pages/Products";
import Investments from "./pages/Investments";
import DAOs from "./pages/DAOs";
import NonProfits from "./pages/NonProfits";
import Grants from "./pages/Grants";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DAOs />} />
            <Route path="all" element={<DAOs />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="products" element={<Products />} />
            <Route path="investments" element={<Investments />} />
            <Route path="non-profits" element={<NonProfits />} />
            <Route path="grants" element={<Grants />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
