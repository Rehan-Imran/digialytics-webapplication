import "./Section.scss";

function Section(props) {
  return (
    <div className={`${props.section}`}>
      {props.view === "left" ? (
        <div
          className={props.section !== "view" ? "sectionone" : "sectiononecopy"}
        >
          <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <img src={props.img} />
        </div>
      ) : (
        <div
          className={props.section !== "view" ? "sectionone" : "sectiononecopy"}
        >
          <img src={props.img} />
          <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.points.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Section;
