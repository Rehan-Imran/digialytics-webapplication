import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Router, Route, Switch } from "react-router";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contactus' element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}
