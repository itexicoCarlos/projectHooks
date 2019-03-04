import React from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './homeStyles'
import Particles from 'react-particles-js'


const Home = ({classes}) => {
  return(
    <div className={classes.position}>
      <div className={classes.homeContainer}>
        <h1 className={classes.titleHome}>@kikisvv</h1>
        <Particles width='100%' height='100%'/>
      </div>
    </div>
  )
}
const appWithStyles = injectSheet(styles)(Home)
export default appWithStyles 
