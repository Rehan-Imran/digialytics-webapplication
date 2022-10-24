import { useState } from "react";
import { Link } from "react-router-dom";
import HoverDropdown from "../HoverDropdown/hoverdropdown";
import "./header.scss";

const Header = (props) => {
  const [offset, setOffset] = useState(0);

  window.addEventListener("scroll", function () {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    setOffset(top);
  });

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  return (
    <div>
      <div
        className={`company_title ${
          !props.background
            ? offset !== 0 && "navbar_background_teal "
            : "navbar_background_teal "
        }`}
      >
        <div style={{ marginTop: "20px" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
          {props.page === "home" ? (
              <h2>Digialytics</h2>
          ):(
            <img src="logo.png" alt="" height="50px" width="300px"></img>
          )}
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "700px",
          }}
        >
          <div className='navbar'>
            <Link to={"/aboutus"} style={{ textDecoration: "none" }}>
              <h4>ABOUT US</h4>
            </Link>
            <Link to={"/ourdomain"} style={{ textDecoration: "none" }}>
              <h4>OUR DOMAIN</h4>
            </Link>
            <HoverDropdown />
          </div>
          <Link to={"/contactus"} style={{ textDecoration: "none" }}>
            <div className='get_a_quote'>
              <button>CONTACT US</button>
            </div>
          </Link>
        </div>
      </div>

      <div id='mySidebar' className='sidebar'>
        <h4 className='closebtn' onClick={() => closeNav()}>
          ×
        </h4>
        <Link to={"/aboutus"} style={{ textDecoration: "none" }}>
              <h4>ABOUT US</h4>
        </Link>
        <Link to={"/ourdomain"} style={{ textDecoration: "none" }}>
              <h4>OUR DOMAIN</h4>
        </Link>
        <HoverDropdown />
      </div>
      <div id='main' className='main'>
        <button className='openbtn' onClick={() => openNav()}>
          ☰
        </button>
      </div>
    </div>
  );
};

export default Header;
