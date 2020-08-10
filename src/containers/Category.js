import React from 'react';
import Meals from '../components/meals';

class Category extends React.Component {
  render() {
    const { category, picture, description, meals} = this.props;
    console.log(picture);

    return (
      <td className="category-element">
          <ul>
            <li>{category}</li>
            <li><img src={picture} alt={category} width="400" height="200"/></li>
            <li>
              <p>{description}</p>
            </li>
            <li>
              <Meals meals={meals}/>
            </li>
          </ul>
      </td>
    );
  }
}

export default Category;
