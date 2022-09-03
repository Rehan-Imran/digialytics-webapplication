import Header from "../Header/header";

import "./Section.scss";

function SectionText(props) {
  return (
    <div className={`${props.section}`}>
      <div className='textSection'>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionText;
