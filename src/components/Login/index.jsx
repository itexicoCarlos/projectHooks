import React, {useState, useRef} from 'react'
// Login import
import { login } from '../../helpers/Auth'
// Styles
import injectSheet from 'react-jss'
import styles from './loginStyles'
import { SpeechBubble } from 'react-kawaii'

const Login = ({classes}) => {

  // ! state 
  const [loginMessage, setLoginMessage] = useState(null)
  const refEmail = useRef(null)
  const refPassword = useRef(null)

  // * Methods
  const handleOnSubmit = (e) => {
    e.preventDefault()
    login(refEmail.current.value, refPassword.current.value)
      .catch(error => setLoginMessage('Usuario o Password incorrectos'))
  }

  return(
    <div className={classes.loginContainer}>
      <SpeechBubble size={150} mood="happy" color="#83D1FB" />
      <form className={classes.formContainer} onSubmit={handleOnSubmit}>
        <input type="email" placeholder='Email' ref={refEmail}/> 
        <input type="password" placeholder='Password' ref={ refPassword}/>
        {
          loginMessage && 
          <div className='error'>
            Error: {loginMessage}
          </div>
        }
        <button className={classes.buttonFormContainer}>Enviar</button>
      </form>
    </div>
  )
}


const loginWithStyes =  injectSheet(styles)(Login)
export default loginWithStyes
