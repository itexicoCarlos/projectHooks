import React from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './styles'
import { Cat } from 'react-kawaii'
 
const Loading = ({classes}) => {
  return(
    <div className={classes.container}>
      <Cat size={200} mood="excited" color="#596881"/>
    </div>
  )
}

const loadingWithstyles =  injectSheet(styles)(Loading)
export default loadingWithstyles