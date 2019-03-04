import React from 'react'
// styles
import injectSheet from 'react-jss'
import styles from './footerStyles.js'

const Footer = ({classes}) => {

  return(
    <div className={classes.containerFooter}>
      <p>The world is full of people who do the same as you...</p>
    </div>
  )
}

const footerWithStyles =  injectSheet(styles)(Footer)
export default footerWithStyles