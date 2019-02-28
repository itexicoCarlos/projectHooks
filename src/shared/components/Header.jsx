import React, { useState } from "react";
// Routes
import { Link } from 'react-router-dom'
// Styles
import injectSheet from 'react-jss'
import styles from './headerStyles'

const Header = ({classes}) => {

  return (
    <header className={classes.position}>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};
const headerWithStyles = injectSheet(styles)(Header)
export default headerWithStyles;
