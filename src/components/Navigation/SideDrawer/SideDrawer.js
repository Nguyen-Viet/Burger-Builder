import React from 'react';
import Logo from '../../Logo/Logo';
import NavList from '../NavItem/NavList';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Helper from '../../../hoc/Helper';

const sideDrawer = (props) => {
  // ....
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return(
    <Helper>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavList/>
        </nav>
      </div>
    </Helper>
  );
}


export default sideDrawer;