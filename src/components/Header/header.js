import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../../slider-data";
import "./header.scss";

const Header = (props) => {
  const [offset, setOffset] = useState(0);

  window.addEventListener("scroll", function (event) {
    const doc = document.documentElement;
    // const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
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
            <h2>Digialytics</h2>
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
            <h4>ABOUT US</h4>
            <h4>OUR CLIENTS</h4>
            <Link to={"/contactus"} style={{ textDecoration: "none" }}>
              <h4>CONTACT US</h4>
            </Link>
            <Link to={"/methodoligies"} style={{ textDecoration: "none" }}>
              <h4>METHODOLOIES</h4>
            </Link>
          </div>
          <div className='get_a_quote'>
            <button>GET A QUOTE</button>
          </div>
        </div>
      </div>

      <div id='mySidebar' className='sidebar'>
        <h4 className='closebtn' onClick={() => closeNav()}>
          ×
        </h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Clients</h4>
        <h4>Contact</h4>
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
