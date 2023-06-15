import "./cardListStyle.css";
import Card from "../Card/cardComponent";
const CardList = ({ monsters }) => {
  return (
    <div className="cardList">
      {monsters.map((monsters) => {
        return <Card monsters={monsters} />;
      })}
    </div>
  );
};

export default CardList;
