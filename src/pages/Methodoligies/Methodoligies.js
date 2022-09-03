import Header from "../../components/Header/header";
import Section from "../../components/SectionDesign/Section";
import SectionText from "../../components/SectionDesignText/Section";
import { sliderData } from "../../slider-data";
import "./Methodoligies.scss";

function Methodoligies() {
  return (
    <>
      <Header background={true} />
      <Section
        section='view1'
        img={sliderData[0].image}
        title='Virtual Try On – A tap and try virtual shopping experience'
      />
      <SectionText
        section='view'
        title='The Challenge'
        paragraph='Our client approached us to create a tool for online shoppers, that would help them instantly visualize their online shopping experience. 

We could think of no better way than computer vision in amalgamation with augmented reality to create the best solution, and that is exactly what we did. 

We created Virtual Try-On – A tool, designed to integrate with any eCommerce platform and capable of helping people visualize wearing any product. A perfect virtual try on!
'
      />
    </>
  );
}

export default Methodoligies;
