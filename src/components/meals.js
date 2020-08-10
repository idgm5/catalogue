import React from 'react';

class Meals extends React.Component {
  render() {
    const { meals } = this.props;
    return (
      <div>
      {meals.map(meal => (
            <ul>
              <li>{meal.title}</li>
              <li><img src={meal.picture} alt={meal} width="200" height="200"/></li>
              <li>
                <p>#{meal.id}</p>
              </li>
            </ul>
      ))}
      </div>
    );
  }
}

export default Meals;
