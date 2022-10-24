import Header from "../../components/Header/header";
import Section from "../../components/SectionDesign/Section";
import Separater from "../../components/Separater/separater";
import UserCards from "../../components/usercard/usercard";
import { sliderData } from "../../slider-data";
import "./aboutus.scss";

// const founders = [
//   { name: "Ahsan Ahmad", designation: "CEO" },
//   { name: "Arslan Mushtaq", designation: "Software Engineer" },
//   { name: "Shaheer", designation: "CTO" },
// ];

function AboutUs() {
  return (
    <>
      <Header background={true} />
      <div className='cover_aboutus'>
        <img src={sliderData[1].image} alt=""/>
        <div>
          <h1>About us</h1>
          <span />
          <p>
            "You imagine it, We will build it."
          </p>
          <button>Learn More</button>
        </div>
      </div>
      {/* <Separater title='Our Team' />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "15%",
          marginRight: "15%",
        }}
      >
        {founders.map((item) => {
          return (
            <UserCards
              img={sliderData[0].image}
              name={item.name}
              designation={item.designation}
            />
          );
        })}
      </div> */}
      <Separater description='Why should you hire us?' />

      <Section
        view='left'
        section='view1'
        overRide='0'
        title='You imagine it, We will build it.'
        description='Our best quality is our work ethic, here at Digitalytics.in We provide the best service with utmost transparency and honesty. Our goal is to make sure our clients have no complaints regarding our work. '
      />
       <div className='motto'>
        <div>
          <span>Innovation</span>
        </div>
        <div>
          <span>Excellence</span>
        </div>
        <div>
          <span>Reliability</span>
        </div>
      </div>
    </>
  );
}
// Excellence
// Reliability

export default AboutUs;
