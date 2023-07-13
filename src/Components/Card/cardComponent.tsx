import "./cardStyle.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
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
