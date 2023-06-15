import "./cardStyle.css";

const Card = (props) => {
  const { id, name, email } = props.monsters;
  return (
    <div key={id} className="cardContainer">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`Monster: ${name}`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
