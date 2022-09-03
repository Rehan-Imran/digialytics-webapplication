import "./Section.scss";

function Section(props) {
  return (
    <div className={`${props.section}`}>
      <div className='sectionone'>
        <h1>{props.title}</h1>
        <img src={props.img} />
      </div>
    </div>
  );
}

export default Section;
