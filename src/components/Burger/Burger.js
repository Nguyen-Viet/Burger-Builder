import React from 'react';
import classes from './Burger.css';
import BurgerIngedient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{

  let transformedIngredients = Object.keys(props.ingredients)
          .map(igKey => {
            return [...new Array(props.ingredients[igKey])]
                      .map((_,i)  => {
                          return <BurgerIngedient key={igKey + i} type={igKey} />;
            }) 
          })
          .reduce((accumulator,current) => {
            return accumulator.concat(current)
          }, []);

      if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
      }

  console.log(transformedIngredients);

  return(
    <div className={classes.Burger}>
      <BurgerIngedient type="bread-top" />
      {transformedIngredients}
      <BurgerIngedient type="bread-bottom" />
    </div>
  )
};

export default burger;