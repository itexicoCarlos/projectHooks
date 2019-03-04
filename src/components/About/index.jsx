import React from 'react'
// styles
import styles from './styles'
import injectSheet from 'react-jss'

const About = ({classes}) => {
  return(
    <div className={classes.position}>
      <section className={classes.aboutContainer}>
        <div className={classes.aboutMe}> 
          <img src="https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2019/03/04/5c7d3e0a9f3b8.jpeg" alt="Heee Heee"/>
          <p>Heeee Heeee</p>
        </div>
      </section>
    </div>
  )
}

const aboutWithStyles = injectSheet(styles)(About)
export default aboutWithStyles