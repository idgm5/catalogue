import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './reducers/index';

const initialState = {
  categories: [
    {
      id: 1,
      category: 'Beef',
      picture: "https://www.themealdb.com/images/category/beef.png",
      description: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.",
      meals: [
        {
          id: 52874,
          title: 'Beef and Mustard Pie',
          picture: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg'
        },
        {
          id: 52834,
          title: 'Beef and Oyster pie',
          picture: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg'
        },
        {
          id: 52824,
          title: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
          picture: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg'
        },
      ]
    },
    {
      id: 2,
      category: 'Chicken',
      picture: "https://www.themealdb.com/images/category/chicken.png",
      description: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.",
      meals: [
        {
          id: 52874,
          title: 'Beef and Mustard Pie',
          picture: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg'
        },
        {
          id: 52834,
          title: 'Beef and Oyster pie',
          picture: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg'
        },
        {
          id: 52824,
          title: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
          picture: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg'
        },
      ]
    },
    {
      id: 3,
      category: 'Dessert',
      picture: "https://www.themealdb.com/images/category/dessert.png",
      description: "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur.",
      meals: [
        {
          id: 52874,
          title: 'Beef and Mustard Pie',
          picture: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg'
        },
        {
          id: 52834,
          title: 'Beef and Oyster pie',
          picture: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg'
        },
        {
          id: 52824,
          title: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
          picture: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg'
        },
      ]
    },
    {
      id: 4,
      category: 'Lamb',
      picture: "https://www.themealdb.com/images/category/lamb.png",
      description: "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages. A sheep in its first year is called a lamb, and its meat is also called lamb.",
      meals: [
        {
          id: 52874,
          title: 'Beef and Mustard Pie',
          picture: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg'
        },
        {
          id: 52834,
          title: 'Beef and Oyster pie',
          picture: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg'
        },
        {
          id: 52824,
          title: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
          picture: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg'
        },
      ]
    }
  ],
};

const store = createStore(combineReducers, { categories: initialState.categories });

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
