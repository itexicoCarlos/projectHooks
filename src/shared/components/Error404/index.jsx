import React from 'react'
// styles
import { File } from 'react-kawaii'
import injectSheet from 'react-jss'
import styles from './styles'

const Error404 = ({classes}) => {

  return(
    <div className={classes.containerError404}>
      <div className={classes.positionCard}>
        <File size={300} mood="ko" color="#83D1FB" />
      </div>
      <h1>Error 404, sorry we can't find this page</h1>
    </div>
  )
}

const error404WithStyles = injectSheet(styles)(Error404)
export default error404WithStyles