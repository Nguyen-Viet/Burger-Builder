import React from 'react';
import Helper from '../../hoc/Helper';

const layout = (props) => (
  <Helper>  
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main>
    {props.children}
  </main>
  </Helper>
);

export default layout;