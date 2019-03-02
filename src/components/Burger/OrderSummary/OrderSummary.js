import React, { Component } from 'react';
import Helper from '../../../hoc/Helper';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render() {

        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>:
                        {this.props.ingredients[key]}
                </li>
            });

        return (
            <Helper>
                <h3>Your Order</h3>
                <p>Yummy Burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Checkout</Button>
            </Helper>
        );
    }
}

export default OrderSummary; 