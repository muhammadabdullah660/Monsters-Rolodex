import "./searchBoxStyle.css";
const SearchBox = (props) => {
  return (
    <input
      type="search"
      className="search-box"
      name={props.name}
      placeholder={props.placeholder}
      // onChange is a react event
      onChange={props.onChangeHandler}
    />
  );
};

export default SearchBox;
