import React from 'react';

class Category extends React.Component {
  render() {
    const { category, picture, description } = this.props;
    console.log(picture);
    
    return (
      <td className="category-element">
          <ul>
            <li>{category}</li>
            <li><img src={picture} alt={category} width="400" height="200"/></li>
            <li>
              <p>{description}</p>
            </li>
          </ul>
      </td>
    );
  }
}

export default Category;
