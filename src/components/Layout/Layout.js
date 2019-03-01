import React from 'react';
import Helper from '../../hoc/Helper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const layout = (props) => (
  <Helper>  
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Helper>
);

export default layout;