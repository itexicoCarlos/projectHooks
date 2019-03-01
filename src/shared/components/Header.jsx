import React from "react";
// Routes
import { NavLink as Link } from 'react-router-dom'
// Styles
import classNames from 'classnames'
import injectSheet from 'react-jss'
import styles from './headerStyles'
import react from '../media/react2.svg'

const Header = ({classes}) => {
  // ! Combine classes  
  let mainHeaderContainer = classNames(
    classes.lContainer,
    classes.mainHeaderBlock
  )
  return (
    <header className={classes.position}>
      <div className={mainHeaderContainer}>
        <Link to='/'>
          <img className={classes.mainLogo} src={react} alt="Logo de react"/>
        </Link>
        <span/>
        <nav>
          <ul className={classes.ulHeader}>
            <li className={classes.liHeader}><Link activeStyle={{borderBottom: '1px solid silver'}} to='/login'>Login</Link></li>
            <li className={classes.liHeader}><Link activeStyle={{borderBottom: '1px solid silver'}} to='/about'>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
const headerWithStyles = injectSheet(styles)(Header)
export default headerWithStyles;
