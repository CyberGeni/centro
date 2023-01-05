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
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*">
            <Route index element={<Dashboard />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="products" element={<Products />} />
            <Route path="investments" element={<Investments />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
