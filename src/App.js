import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Methodoligies from "./pages/Methodoligies/Methodoligies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Router, Route, Switch } from "react-router";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contactus' element={<ContactUs />} />
          <Route exact path='/methodoligies' element={<Methodoligies />} />
        </Routes>
      </Router>
    </div>
  );
}
