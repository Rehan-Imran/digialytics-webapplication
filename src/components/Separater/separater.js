import "./separater.scss";

function Separater(props) {
  return (
    <div className='separater'>
      <div>
        <div className='title'>
          <span>{props.title}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Separater;
