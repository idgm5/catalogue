import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from './Category';
import { CATEGORIES } from '../actions/index';

class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
      const { categories } = this.state;
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              categories: result.categories
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
    const { categories } = this.state;
    return (
      <div id="catalogue">
        <table style={{ width: '100%'}}>
          <tbody>
            {categories.map(category => (
              <tr key={category.idCategory}>
                <Category
                  id={category.idCategory}
                  category={category.strCategory}
                  picture={category.strCategoryThumb}
                  description={category.strCategoryDescription}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
};

Catalogue.propTypes = {
  addCategories: PropTypes.func.isRequired,
};

export default Catalogue;
