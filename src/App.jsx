import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
