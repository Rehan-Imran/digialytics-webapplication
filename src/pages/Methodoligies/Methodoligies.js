import Header from "../../components/Header/header";
import Section from "../../components/SectionDesign/Section";
import Separater from "../../components/Separater/separater";
import SectionText from "../../components/SectionDesignText/Section";
import { sliderData } from "../../slider-data";
import "./Methodoligies.scss";

function Methodoligies() {
  return (
    <>
      <Header background={true} />
      <Section
        view='left'
        section='view1'
        img={sliderData[0].image}
        title='OUR DOMAIN'
        description='Our goal is to automate and improve existing systems in place. We can employ our skillset to provide   solutions in multiple domains.   '
      />
      <Separater
        title='Finance'
        description='We can help the investors to make smart data driven decisions. This is how we can achieve that'
      />

      <Section
        view='right'
        section='view'
        img={sliderData[0].image}
        points={[
          "●	Stock Market Behavior Prediction",
          "●	Market Trends Prediction",
          "●	Risk Prediction",
          "●	Value Prediction",
          "●	Value Chain Analysis",
        ]}
      />
    </>
  );
}

export default Methodoligies;
