import React from 'react';

class Meals extends React.Component {
  render() {
    const { meals, category } = this.props;
    console.log(window.location.pathname)
    function sameCategory(){
      if(('/' + category) === window.location.pathname){
        return(meals.map(meal => (
              <ul>
                <li>{meal.title}</li>
                <li><img src={meal.picture} alt={meal} width="200" height="200"/></li>
              </ul>
        )));
      } 
    }
    return (
      <div>
      {sameCategory()}
      </div>
    );
  }
}

export default Meals;
