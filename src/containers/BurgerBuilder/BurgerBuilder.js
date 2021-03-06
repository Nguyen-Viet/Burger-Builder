import React, { Component } from 'react';
import Helper from '../../hoc/Helper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

  componentDidMount(){
    axios.get('https://react-burger-cadc8.firebaseio.com/ingredients.json');
  }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
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

  purchaseHandler = () => {
    this.setState({purchasing: true});
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

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    //alert('You Continue!');
    this.setState({loading:true});
    const order = {
      ingredients: this.state.ingredients,
      price : this.state.totalPrice,
      customer: {
        name: "viet",
        address: {
          street: "fake street 12",
          zipCode: "123123",
          country: 'Canada'
        },
        email: 'fakeMail@mail.com'
      },
      deliveryMethod: "high"
    }

    axios.post('/orders.json', order)
        .then(response => {
          this.setState( { loading:false, purchasing:false } );
        })
        .catch(error => {
          this.setState( { loading:false, purchasing:false } );
        });


  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    // {salad: true/false, meat: true/false, ...}
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary ingredients={this.state.ingredients}
    purchaseCancelled={this.purchaseCancelHandler}
    purchaseContinued={this.purchaseContinueHandler}
    price={this.state.totalPrice}/>;

    if (this.state.loading){
      orderSummary = <Spinner/>;
    }


    return(
      <Helper >
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingredientAdded={this.addIngredientHandler}
                       ingredientRemoved={this.removeIngredientHandler}
                       disabled={disabledInfo}
                       price={this.state.totalPrice}
                       purchasable={this.state.purchasable}
                       ordered={this.purchaseHandler}/>
      </Helper>
    );  
  }
}

export default WithErrorHandler(BurgerBuilder, axios);