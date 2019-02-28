import React from "react";
// Routes
import { NavLink as Link } from 'react-router-dom'
// Styles
import injectSheet from 'react-jss'
import styles from './headerStyles'
import react from '../media/react2.svg'

const Header = ({classes}) => {

  return (
    <header className={classes.position}>
    <picture>
      <source srcset={''}/>
      <img className={classes.imgHeader} src={react} alt="Soy una imagen"/>
    </picture>
    <span/>
      <nav>
        <ul className={classes.ulHeader}>
          <li className={classes.liHeader}><Link activeStyle={{borderBottom: '1px solid silver'}} to='/login'>Login</Link></li>
          <li className={classes.liHeader}><Link activeStyle={{borderBottom: '1px solid silver'}} to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};
const headerWithStyles = injectSheet(styles)(Header)
export default headerWithStyles;
