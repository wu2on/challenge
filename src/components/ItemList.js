import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
  itemsFetchData,
  itemsFetchDataError,
  itemsFetchDataLoading,
} from "../actions/items";

import { selectFilteredItems } from "../reducers/selectors";

import { Loading } from "./Loading";
import { List } from "./List";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData("http://5af1eee530f9490014ead8c4.mockapi.io/items");
  }

  render() {
    const { isLoading, error, items } = this.props;
    console.log(items);
    return isLoading ? (
      <Loading />
    ) : error ? (
      <div>{error}</div>
    ) : (
      <List data={items} />
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isLoading: state.isLoading,
    items: selectFilteredItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
