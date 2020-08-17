/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */

import React from 'react';
import { withRouter } from 'react-router-dom';

class Meals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meals: [] };
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            meals: result.meals,
          });
        },
        error => {
          this.setState({
            meals: error,
          });
        },
      );
  }

  render() {
    const { meals } = this.state;
    return (
      <div className="category-element meal-element">
        {
          meals.map(meal => (
            <ul key={meal.strMeal}>
              <li><p>{meal.strMeal}</p></li>
              <li><img src={meal.strMealThumb} alt={meal.strMeal} /></li>
              <li>
                <button onClick={() => window.location.href = (`/meal/${meal.idMeal}`)} type="button">View Recipe</button>
              </li>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default withRouter(Meals);
