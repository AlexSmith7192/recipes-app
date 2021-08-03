import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import MealsDetailPage from '../pages/MealsDetailPage';
import Explore from '../pages/Explore';
import ExploreMeals from '../pages/ExploreMeals';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreMealsByIngredients from '../pages/ExploreMealsByIngredients';
import ExploreDrinksByIngredients from '../pages/ExploreDrinksByIngredients';
import ExploreMealsByArea from '../pages/ExploreMealsByArea';
import Profile from '../pages/Profile';
import DrinkDetails from '../components/DrinkDetails';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Meals } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/comidas/:id" component={ MealsDetailPage } />
      <Route exact path="/bebidas/:id" component={ DrinkDetails } />
      <Route exact path="/explorar/comidas" component={ ExploreMeals } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreMealsByIngredients }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksByIngredients }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreMealsByArea } />
      <Route exact path="/perfil" component={ Profile } />
    </Switch>
  );
}
