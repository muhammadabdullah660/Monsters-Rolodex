import { Component } from "react";
import "./searchBoxStyle.css";
class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className="search-box"
        name={this.props.name}
        placeholder={this.props.placeholder}
        // onChange is a react event
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
