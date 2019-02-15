import React, { Component } from 'react';
import Helper from '../../hoc/Helper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
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