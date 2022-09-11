import Header from "../../components/Header/header";
import Section from "../../components/SectionDesign/Section";
import Separater from "../../components/Separater/separater";
import { sliderData } from "../../slider-data";
import "./OurDomain.scss";

function OurDomain() {
  return (
    <>
      <Header background={true} />
      <Section
        view='left'
        section='view1'
        overRide='0'
        img={sliderData[0].image}
        title='OUR DOMAIN'
        description='Our goal is to automate and improve existing systems in place. We can employ our skill set to provide solutions in multiple domains.   '
      />
      <Separater
        title='Finance'
        description='We can help the investors to make smart data driven decisions. This is how we can achieve that'
      />

      <Section
        view='right'
        section='view'
        imgside='left'
        overRide='0'
        img={sliderData[0].image}
        points={[
          "Stock Market Behavior Prediction",
          "Market Trends Prediction",
          "Risk Prediction",
          "Value Prediction",
          "Value Chain Analysis",
        ]}
      />
      <Separater
        title='Health Care'
        description='We can use Computer Vision and Data Analysis to improve medical research and disease diagnosis. '
      />

      <Section
        view='right'
        section='view2'
        imgside='right'
        overRide='0'
        img={sliderData[0].image}
        description='Some of the ways we can do that:'
        points={[
          "Cancer Detection",
          "Disease Diagnosis",
          "DNA Sequencing",
          "Prognosis ",
          "Gene Expression",
          "Gene Classification",
          "Genetic Distribution",
        ]}
      />
      <Separater
        title='Retail'
        description='We can use data to help businesses increase their profits with following services:'
      />
      <Section
        view='right'
        section='view2'
        imgside='right'
        overRide='0'
        img={sliderData[0].image}
        points={[
          "Sales Prediction",
          "Customer Segmentation",
          "DNA Sequencing",
          "Product Analysis ",
          "Data Driven Marketing Strategy",
          "Lead Generation",
        ]}
      />
      <Separater
        title='Law'
        description='With the digitization of case files and courts data, we can apply Machine Learning to do following tasks:'
      />
      <Section
        view='right'
        section='view'
        imgside='left'
        img={sliderData[0].image}
        overRide='0'
        points={[
          "Calculate the probability of winning a lawsuit",
          "Help citizens know exact clauses for any offence",
          "Giving judgments based on prior instances",
        ]}
      />
    </>
  );
}

export default OurDomain;
