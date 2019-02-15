import React, { Component } from 'react';
import Helper from '../../hoc/Helper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return(
      <Helper>
        <Burger ingredients={this.state.ingredients}/>
        <div>Burger Controls</div>
      </Helper>
    );  
  }
}

export default BurgerBuilder;