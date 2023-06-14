import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        name={this.props.name}
        placeholder={this.props.placeholder}
        // onChange is a react event
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
