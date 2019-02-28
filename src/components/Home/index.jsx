import React from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './homeStyles'

const Home = ({classes}) => {
  return(
    <div className={classes.position}>
      Home
    </div>
  )
}
const appWithStyles = injectSheet(styles)(Home)
export default appWithStyles 
