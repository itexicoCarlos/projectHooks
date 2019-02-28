import React from 'react'
// styles
import injectSheet from 'react-jss'
import styles from './footerStyles.js'

const Footer = ({classes}) => {

  return(
    <div className={classes.containerFooter}>
      <p>footer@kikisvv</p>
    </div>
  )
}

const footerWithStyles =  injectSheet(styles)(Footer)
export default footerWithStyles