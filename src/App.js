import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Products from "./pages/Product/Products";
import ProductDetail from "./pages/Product/ProductDetail/ProductDetail";
import AcneTreatment from "./pages/AcneTreatment/AcneTreatment";
import ContactToolbox from "./components/ContactToolbox/ContactToolbox";
import BackToTop from "./components/BackToTop/BackToTop";
import PhoneTool from "./components/PhoneTool/PhoneTool";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactToolbox />
      <BackToTop />
      <PhoneTool />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/acne" element={<AcneTreatment />} />

        <Route path="/products/1" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
