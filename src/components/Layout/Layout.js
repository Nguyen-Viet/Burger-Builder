import React from 'react';
import Helper from '../../hoc/Helper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Helper>  
    <Toolbar/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Helper>
);

export default layout;