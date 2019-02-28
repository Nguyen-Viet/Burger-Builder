import React from 'react';
import Helper from '../../../hoc/Helper';


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
            <p>Continue to checkout?</p>
        </Helper>
    )
}

export default orderSummary; 