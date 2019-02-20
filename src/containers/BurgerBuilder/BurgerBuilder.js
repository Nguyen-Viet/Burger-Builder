import React, { Component } from 'react';
import Helper from '../../hoc/Helper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
  }

  render() {
    return(
      <Helper>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </Helper>
    );  
  }
}

export default BurgerBuilder;