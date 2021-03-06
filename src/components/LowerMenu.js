import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/LowerMenu.css';

export default function LowerMenu(props) {
  const { path } = props;
  return (
    <footer className="lower-menu" data-testid="footer">
      <Link to={ path || '/explorar/bebidas' }>
        <img
          data-testid="drinks-bottom-btn"
          className="lower-menu__img"
          src={ drinkIcon }
          alt="Cocktail"
        />
      </Link>
      <Link to="/explorar">
        <img
          data-testid="explore-bottom-btn"
          className="lower-menu__img"
          src={ exploreIcon }
          alt="Compass"
        />
      </Link>
      <Link to={ path || '/explorar/comidas' }>
        <img
          data-testid="food-bottom-btn"
          className="lower-menu__img"
          src={ mealIcon }
          alt="Crossed fork and spoon"
        />
      </Link>
    </footer>
  );
}

LowerMenu.propTypes = {
  path: PropTypes.instanceOf(PropTypes.object).isRequired,
};
