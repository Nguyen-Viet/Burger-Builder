import React, { Component } from 'react';
import Helper from '../../hoc/Helper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  updatePurchaseState = (ingredients) => {
    // const ingredients = {
    //   ...this.state.ingredients
    // }

    const ingredientList = Object.keys(ingredients);
    
    const total = ingredientList.map( key => {
      return ingredients[key]
        })
      .reduce((accumulator, currentItem) => {
        return accumulator + currentItem;
      },0);

      console.log(total);

    this.setState({ purchasable: total > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;

    this.setState({ingredients:updatedIngredient, totalPrice:newPrice});
    this.updatePurchaseState(updatedIngredient);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if(oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({ingredients:updatedIngredient, totalPrice:newPrice});
    this.updatePurchaseState(updatedIngredient);
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    // {salad: true/false, meat: true/false, ...}
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return(
      <Helper>
        <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingredientAdded={this.addIngredientHandler}
                       ingredientRemoved={this.removeIngredientHandler}
                       disabled={disabledInfo}
                       price={this.state.totalPrice}
                       purchasable={this.state.purchasable}/>
      </Helper>
    );  
  }
}

export default BurgerBuilder;