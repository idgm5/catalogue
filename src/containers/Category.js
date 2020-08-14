/* eslint-disable no-return-assign */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const Category = props => {
  const {
    category, picture, description,
  } = props;
  return (
    <td className="category-element" data-testid={category}>
      <ul>
        <li><img src={picture} alt={category} width="400" height="200" data-testid="image"/></li>
        <li>
          <p>{description}</p>
        </li>
        <li>
          <button onClick={() => window.location.href = (`/${category}`)} type="button">View Meals</button>
        </li>
      </ul>
    </td>
  );
};

Category.propTypes = {
  picture: PropTypes.any.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Category;
