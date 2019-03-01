import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/* 
  Funciones auxiliares
  Estas funciones nos ayudan con lo que es las rutas publicas y privadas, si es que el usuario está autentificado o no.
*/

export const PrivateRoute = ( {component: Component, authed, rest} ) => (
  <Route 
    {...rest}
    render={
      props => authed === true
        ? <Component {...props} /> 
        : <Redirect to={{ pathname: '/login', state: {from: props.location}}}/>
    }
  />
)

export const PublicRoute  = ( {component: Component, authed, rest} ) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} /> 
        : <Redirect to='/cursos'/>
    }
  />
)
