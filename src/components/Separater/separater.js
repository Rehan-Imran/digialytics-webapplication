import "./separater.scss";

function Separater(props) {
  return (
    <div className='separater'>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Separater;
