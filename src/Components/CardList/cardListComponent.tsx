import "./cardListStyle.css";
import Card from "../Card/cardComponent";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Array<Monster>;
};
const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="cardList">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
