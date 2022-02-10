import "./Card.scss";

function Card(props) {
  return (
    <>
      <div className="message">
        <h2>{props.name}</h2>
        <p>{props.exercise}</p>
      </div>

      <button onClick={props.func} className="buttonCard">
        Принять
      </button>
    </>
  );
}

export default Card;
