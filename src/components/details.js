import React from 'react';
import { withRouter } from "react-router-dom";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mealDetails: [] };
  }

  componentDidMount() {
      const { mealDetails } = this.state;
      let { details } = this.props.match.params;

      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + details )
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              mealDetails: result.meals
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )

    }

  render() {
    const { mealDetails } = this.state;
    return (
      <div>
        {
          mealDetails.map(detail => (
                <ul>
                  <li>{detail.strMeal}</li>
                  <li><img src={detail.strMealThumb} alt={detail.strMeal} width="200" height="200"/></li>
                  <li>{detail.strCategory}</li>
                  <li>{detail.strArea}</li>
                  <li>{detail.strInstructions}</li>
                  <li>{detail.strYoutube}</li>
                  <li>{detail.strIngredient1}</li>
                  <li>{detail.strIngredient2}</li>
                  <li>{detail.strIngredient3}</li>
                  <li>{detail.strIngredient4}</li>
                  <li>{detail.strIngredient5}</li>
                  <li>{detail.strIngredient6}</li>
                  <li>{detail.strIngredient7}</li>
                  <li>{detail.strMeasure1}</li>
                  <li>{detail.strMeasure2}</li>
                  <li>{detail.strMeasure3}</li>
                  <li>{detail.strMeasure4}</li>
                  <li>{detail.strMeasure5}</li>
                  <li>{detail.strMeasure6}</li>
                  <li>{detail.strMeasure7}</li>
                </ul>
          ))
        }
      </div>
    );
  }
}

export default withRouter(Details);
