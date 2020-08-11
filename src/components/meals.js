import React from 'react';
import { withRouter } from "react-router-dom";

class Meals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meals: [] };
  }

  componentDidMount() {
      const { meals } = this.state;
      let { category } = this.props.match.params;
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category )
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              meals: result.meals
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
    const { meals } = this.state;
    return (
      <div>
        {
          meals.map(meal => (
                <ul>
                  <li>{meal.strMeal}</li>
                  <li><img src={meal.strMealThumb} alt={meal} width="200" height="200"/></li>
                </ul>
          ))
        }
      </div>
    );
  }
}

export default withRouter(Meals);
