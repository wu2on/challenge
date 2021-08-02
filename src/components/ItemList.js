import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";
import { selectItemEntities } from "../reducers/selectors";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData("http://5af1eee530f9490014ead8c4.mockapi.io/items");
  }

  render() {
    console.log(this.props.items);
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: selectItemEntities(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
