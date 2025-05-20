// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Control from "./pages/Control.jsx";
import History from "./pages/History.jsx";
import Login from "./pages/Login.jsx";
import Bhx from "./pages/Bhx.jsx";
import Product from "./pages/Product.jsx";
import Giohang from "./pages/Giohang.jsx";
import lay_out from "./pages/layout.jsx";  

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Bhx />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/control" element={<Control />} />
              <Route path="/history" element={<History />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Giohang" element={<Giohang />} />
              <Route path="/layout" element={<lay_out />} />

          </Routes>
      </Router>
  );
}

export default App;
