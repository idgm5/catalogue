import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchResults = props => {
 const { meals } = props;
 function isNull(){
   if(typeof meals === "string") {
     return <p>{meals}</p>;
   } else {
     return (meals.map(meal => (
           <ul>
             <li>{meal.strMeal}</li>
             <li><img src={meal.strMealThumb} alt={meal.strMeal} width="200" height="200"/></li>
             <li>
               <button onClick={() => window.location.href = ('/meal/' + meal.idMeal)} type="button">View Details</button>
             </li>
           </ul>
     )));
   }
 }
 return (
   <div id="searchlist">
     <table style={{
       width: '100%',
     }}
     >
       <tbody>
       {isNull()}
       </tbody>
     </table>
   </div>
 );
};

const mapStateToProps = state => ({
 meals: state.meals,
});

SearchResults.propTypes = {
 meals: PropTypes.objectOf(typeof ('array')).isRequired,
};

export default connect(mapStateToProps)(SearchResults);
