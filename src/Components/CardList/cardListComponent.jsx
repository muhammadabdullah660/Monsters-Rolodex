import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="cardList">
        {monsters.map((monsters) => {
          const { id, name, email } = monsters;
          return (
            <div key={monsters.id} className="cardContainer">
              <img
                src={`https://robohash.org/${id}?set=set2`}
                alt={`Monster: ${name}`}
              />
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
