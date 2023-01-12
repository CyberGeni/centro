import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Clubs from "./pages/Social";
import Products from "./pages/Products";
import Investments from "./pages/Investments";
import DAOs from "./pages/DAOs";
import NonProfits from "./pages/NonProfits";
import Grants from "./pages/Grants";
import SingleDao from "./pages/SingleDao";
import DAOSideBar from "./components/DAOSideBar";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DAOs />} />
            <Route path="all" element={<DAOs />} />
            <Route path="all/:id" element={<SingleDao />} />
            <Route path="social" element={<Clubs />} />
            <Route path="social/:id" element={<SingleDao />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleDao />} />
            <Route path="investments" element={<Investments />} />
            <Route path="investments/:id" element={<SingleDao />} />
            <Route path="non-profits" element={<NonProfits />} />
            <Route path="non-profits/:id" element={<SingleDao />} />
            <Route path="grants" element={<Grants />} />
            <Route path="grants/:id" element={<SingleDao />} />
          </Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
