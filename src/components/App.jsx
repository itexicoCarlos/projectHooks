import React from 'react'

const App = (props) => {

  const { children } = props

  return(
    <div> 
      { children }
      Hello world
    </div>
  )
}

export default App