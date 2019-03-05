import React from 'react'
// styles
import styles from './styles'
import injectSheet from 'react-jss'
import Avatar from 'react-avatar'

const About = ({classes}) => {
  return(
    <div className={classes.position}>
      <section className={classes.aboutContainer}>
        <div className={classes.aboutMe}> 
        <Avatar twitterHandle='@kikisvv' name="Carlos Vera" size="150" round='200px' color='lightblue'/>
          <p>Hello!</p>
        </div>
        <div className={classes.projectsPosition}>
          <div className={classes.projectsContainer}>

          </div>
        </div>
      </section>
    </div>
  )
}

const aboutWithStyles = injectSheet(styles)(About)
export default aboutWithStyles