import React, {Component} from 'react';
import classes from './Modal.css';
import Helper from '../../../hoc/Helper';
import Backdrop from '../Backdrop/Backdrop';



class Modal extends Component {

    shouldComponentUpdate( nextProps, nextState ){
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('[Modal] Will Update');
    }



    render() {
        const style = (props) => ({
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
        });

        return(
            <Helper>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal} 
                    style={style(this.props)}>
                    {this.props.children}
                </div>
            </Helper>
        )
    }
} 


export default Modal;