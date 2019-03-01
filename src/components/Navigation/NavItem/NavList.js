import React from 'react';
import classes from './NavList.css';
import NavItem from './NavItem';

const navList = (props) => (
  <ul className={classes.NavList}> 
    <NavItem link="/" active>BurgerBuilder</NavItem>
    <NavItem link="/" >checkout</NavItem>
  </ul>
);

export default navList;