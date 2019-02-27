import React from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './appStyles'

const App = (props) => {
  const { children, classes } = props
  return(
    <main className={classes.appContainer}> 
      { children }
    </main>
  )
}
const appWithStyles = injectSheet(styles)(App)
export default appWithStyles