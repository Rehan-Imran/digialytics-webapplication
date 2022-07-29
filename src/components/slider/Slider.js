import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../../slider-data";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = (value = null) => {
    if (value === null) {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    } else {
      setCurrentSlide(value);
    }
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div>
      <div className='company_title'>
        <div>
          <h2>Digialytics</h2>
        </div>
        <div className='navbar'>
          <h4>ABOUT US</h4>
          <h4>OUR CLIENTS</h4>
          <h4>CONTACT US</h4>
          <h4>METHODOLOIES</h4>
        </div>
      </div>
      <div id='mySidebar' className='sidebar'>
        <h4 className='closebtn' onClick={() => closeNav()}>
          ×
        </h4>
        <h4 href='#'>About</h4>
        <h4 href='#'>Services</h4>
        <h4 href='#'>Clients</h4>
        <h4 href='#'>Contact</h4>
      </div>
      <div id='main' className='main'>
        <button className='openbtn' onClick={() => openNav()}>
          ☰
        </button>
      </div>
      <div className='cover_image_pagination'>
        {sliderData.map((item, index) => (
          <button
            style={{
              borderRadius: "50%",
              width: "15px",
              border: "none",
              height: "15px",
              backgroundColor: index === currentSlide ? "#1A7D7C" : "white",
            }}
            onClick={() => nextSlide(index)}
          />
        ))}
      </div>
      <div className='slider'>
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt='slide' className='image' />
                  <div className='content '>
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button className='--btn --btn-primary'>Get Started</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
