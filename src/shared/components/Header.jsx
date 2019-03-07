import React from "react";
// Routes
import { Link } from '@reach/router'
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
            <li className={classes.liHeader}><Link  to='/login'>Login</Link></li>
            <li className={classes.liHeader}><Link  to='/about'>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
const headerWithStyles = injectSheet(styles)(Header)
export default headerWithStyles;
