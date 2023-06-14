import { Component } from "react";
import "./cardListStyle.css";
import Card from "../Card/cardComponent";
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="cardList">
        {monsters.map((monsters) => {
          return <Card monsters={monsters} />;
        })}
      </div>
    );
  }
}

export default CardList;
