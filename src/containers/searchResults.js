/* eslint-disable no-return-assign */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchResults = props => {
  const { meals } = props;
  function isNull() {
    if (typeof meals === 'string') {
      return <p>{meals}</p>;
    }
    return (meals.map(meal => (
      <div className="category-element meal-element" key={meal.strMeal}>
        <ul>
          <li><p>{meal.strMeal}</p></li>
          <li><img src={meal.strMealThumb} alt={meal.strMeal} width="200" height="200" /></li>
          <li>
            <button onClick={() => window.location.href = (`/meal/${meal.idMeal}`)} type="button">View Recipe</button>
          </li>
        </ul>
      </div>
    )));
  }
  return (
    <div id="searchlist">
      <table style={{
        width: '100%',
      }}
      >
        <tbody>
          {isNull()}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  meals: state.meals,
});

SearchResults.propTypes = {
  meals: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(SearchResults);
