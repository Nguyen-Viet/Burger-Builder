import React from 'react';
import classes from './Burger.css';
import BurgerIngedient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{

  const transformedIngredient = Object.keys(props.ingredients)
          .map(igKey => {
            return [...new Array(props.ingredients[igKey])].map((_,i)  => {
              return <BurgerIngedient key={igKey +i} type={igKey} />;
            })
          });

  return(
    <div className={classes.Burger}>
      <BurgerIngedient type="bread-top" />
      {transformedIngredient}
      <BurgerIngedient type="bread-bottom" />
    </div>
  )
};

export default burger;