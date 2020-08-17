import React from 'react';
import Category from './Category';

class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            categories: result.categories,
          });
        },
        error => {
          this.setState({
            categories: error,
          });
        },
      );
  }

  render() {
    const { categories } = this.state;
    return (
      <div id="catalogue" data-testid="catalogue">
        {categories.map(category => (
          <div key={category.idCategory}>
            <Category
              id={category.idCategory}
              category={category.strCategory}
              picture={category.strCategoryThumb}
              description={category.strCategoryDescription}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Catalogue;
