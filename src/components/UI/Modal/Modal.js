import React from 'react';
import classes from './Modal.css';
import Helper from '../../../hoc/Helper';
import Backdrop from '../Backdrop/Backdrop';

const style = (props) => ({
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0',
});

const modal = (props) => {

    return(
        <Helper>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.Modal} 
                style={style(props)}>
                {props.children}
            </div>
        </Helper>
    )
}

export default modal;