import React, { Component } from "react";
import "./cardStyle.css";
export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monsters;
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
  }
}
