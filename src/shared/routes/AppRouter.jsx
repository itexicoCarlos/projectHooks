import React from 'react'
import App from '../../components/App'
// Components
import Header from '../components/Header'
import Login from '../../components/Login/Login'
// Routes
import { Switch, Route } from 'react-router-dom'

const AppRouter = () => {
  return(
    <App>
      <Header/>
      <Switch>
        <Route path='/login' component={Login} exact/>
      </Switch>
    </App>
  )
}

export default AppRouter