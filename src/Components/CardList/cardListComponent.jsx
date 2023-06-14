import { Component } from "react";

class CardList extends Component {
  render() {
    return (
      <>
        {this.props.monsters.map((monsters) => (
          <div key={monsters.id}>
            <h1>{monsters.name}</h1>
          </div>
        ))}
      </>
    );
  }
}

export default CardList;
