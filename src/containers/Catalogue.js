import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from './Category';

const Catalogue = props => {
  const { categories } = props;

  return (
    <div id="catalogue">
      <table style={{ width: '100%'}}>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <Category
                category={category.category}
                picture={category.picture}
                description={category.description}
                meals={category.meals}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
});


Catalogue.propTypes = {
  categories: PropTypes.objectOf(typeof ('array')).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
