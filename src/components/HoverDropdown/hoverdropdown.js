import "./hoverdropdown.scss";

const HoverDropdown = (props) => {
  return (
    <div class='dropdown'>
      <h4>OUR SOLUTIONS ▼</h4>
      <div class='dropdown-content'>
        <a href='#'>NLP (Natural Language Processing)</a>
        <a href='#'>CV (Computer Vision)</a>
        <a href='#'>Forecasting/ Time Series</a>
        <a href='#'>Dev Ops</a>
        <a href='#'>BI & Advanced Analytics</a>
        <a href='#'>Mobile App& Web Development</a>
      </div>
    </div>
  );
};

export default HoverDropdown;
