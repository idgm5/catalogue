/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { SEARCH } from '../actions/index';

const SearchForm = props => {
  const handleSubmit = event => {
    const { addItem } = props;
    event.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.item.value}`)
      .then(res => res.json())
      .then(
        result => {
          addItem(result.meals);
        },
      );
    props.history.push((`/search/${event.target.item.value}`));
  };
  return (
    <form id="searchForm" name="searchForm" onSubmit={handleSubmit}>
      <div>
        <input type="text" id="itemInput" name="item" placeholder="Fish... Chicken..." />
        <input type="submit" value="SEARCH" id="submitBtn" />
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => {
    dispatch(SEARCH(item));
  },
});

SearchForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(SearchForm));
