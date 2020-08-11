import React from 'react';
import { Route, Link } from "react-router-dom";
import Meals from '../components/meals';

class Category extends React.Component {
  render() {
    const { category, picture, description, meals, id} = this.props;

    function showMeals(path){
      if(('/' + category) == path){
        return (<td className="meal-element"><Route path={('/' + category)} render={(props) => <Meals meals={ meals } category={ category }/> } /></td>)
      } else {
        return (<td className="category-element">
            <ul>
              <li>{category}</li>
              <li><img src={picture} alt={category} width="400" height="200"/></li>
              <li>
                <p>{description}</p>
              </li>
              <li>
                <button onClick={() => window.location.href = ('/' + category)} type="button">View Meals</button>
              </li>
            </ul>
        </td>)
      }
    }
      return (
        <div>
          {showMeals(window.location.pathname)}
        </div>
      );
  }
}

export default Category;
