import Header from "../../components/Header/header";
import Section from "../../components/SectionDesign/Section";
import Separater from "../../components/Separater/separater";
import SectionText from "../../components/SectionDesignText/Section";
import { sliderData } from "../../slider-data";
import "./aboutus.scss";

function AboutUs() {
  return (
    <>
      <Header background={true} />
      <Section
        view='left'
        section='view1'
        overRide='0'
        img={sliderData[0].image}
        title='About Us'
        description='You imagine it, We will build it. This is our motto. Our best quality is our work ethic, here at Digitalytics.in We provide the best service with utmost transparency and honesty. Our goal is to make sure our clients have no complaints regarding our work. '
      />
      <Separater
        title='Our Team'
      />

      <Section
        view='left'
        section='view1'
        overRide='1'
        img={sliderData[0].image}
        description=''
        points={[
            "Ahsan Ahmad",
            "Arslan Mushtaq",
            "Shaheer"
        ]}
      />
    </>
  );
}

export default AboutUs;
