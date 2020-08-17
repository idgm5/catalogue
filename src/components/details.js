/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mealDetails: [] };
  }

  componentDidMount() {
    const { details } = this.props.match.params;

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            mealDetails: result.meals,
          });
        },
        error => {
          this.setState({
            mealDetails: error,
          });
        },
      );
  }

  render() {
    const { mealDetails } = this.state;
    return (
      <div className="category-element meal-element recipe-element">
        {
          mealDetails.map(detail => (
            <ul key={detail.strMeal}>
              <li id="icon-item">
                <FontAwesomeIcon icon={faGlobeAmericas} id="icon" />
                {' '}
                {detail.strArea}
              </li>
              <li><p>{detail.strMeal}</p></li>
              <li><img src={detail.strMealThumb} alt={detail.strMeal} width="200" height="200" /></li>
              <li id="icon-item" className="icon-video"><a href={detail.strYoutube}>Watch Video</a></li>
              <li><h3>Ingredients</h3></li>
              <li>
                {detail.strMeasure1}
                {' '}
                {detail.strIngredient1}
              </li>
              <li>
                {detail.strMeasure2}
                {' '}
                {detail.strIngredient2}
              </li>
              <li>
                {detail.strMeasure3}
                {' '}
                {detail.strIngredient3}
              </li>
              <li>
                {detail.strMeasure4}
                {' '}
                {detail.strIngredient4}
              </li>
              <li>
                {detail.strMeasure5}
                {' '}
                {detail.strIngredient5}
              </li>
              <li>
                {detail.strMeasure6}
                {' '}
                {detail.strIngredient6}
              </li>
              <li>
                {detail.strMeasure7}
                {' '}
                {detail.strIngredient7}
              </li>
              <li><h3>Instructions</h3></li>
              <li><p id="Ingredients">{detail.strInstructions}</p></li>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default withRouter(Details);
