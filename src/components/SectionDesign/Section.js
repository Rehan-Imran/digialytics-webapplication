import TickMark from "../TickMark/tickmark";

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
            {props.overRide === "1" ? (
              <p>
                {props.points.map((item) => (
                  <p className='overRide'>{item}</p>
                ))}
              </p>
            ) : (
              <p>{props.description}</p>
            )}
          </div>
          {props.overRide === "0" && <img src={props.img} />}
        </div>
      ) : (
        <div
          className={`sectiononecopy ${
            props.imgside == "left" ? "leftImage" : "rightImage"
          }`}
        >
          {props.imgside === "left" && <img src={props.img} />}

          <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.points.map((item) => (
              <div
                style={{
                  marginLeft: props.imgside === "left" && "150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TickMark />
                <p>{item}</p>
              </div>
            ))}
          </div>

          {props.imgside === "right" && <img src={props.img} />}
        </div>
      )}
    </div>
  );
}

export default Section;
