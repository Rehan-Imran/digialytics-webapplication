import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurDomain from "./pages/OurDomain/OurDomain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/About Us/aboutus";

// import { Router, Route, Switch } from "react-router";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/contactus' element={<ContactUs /> } />
          <Route exact path='/ourdomain' element={<OurDomain />} />
        </Routes>
      </Router>
    </div>
  );
}
