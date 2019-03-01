import React from 'react';
import Helper from '../../../hoc/Helper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>:
                        {props.ingredients[key]}
                 </li>
        });

    return(
        <Helper>
            <h3>Your Order</h3>
            <p>Yummy Burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Checkout</Button>
        </Helper>
    )
}

export default orderSummary; 