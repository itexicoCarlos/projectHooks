const styles = ({
  loginContainer: {
    gridArea: '2/1/4/4',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTop: '1px solid #ccc'
  },
  formContainer: {
    height: '40%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& input': {
      margin: '1em',
      padding: '1em',
      width: '50%',
      border: 'none',
      borderBottom: '1px solid black',
      transitionDuration: '1s',
      '&:focus': {
        outline: 'none',
        borderBottom: '1px solid lightblue'
      }
    }
  },
  buttonFormContainer: {
    padding: '1em',
    borderRadius: '10px',
    cursor: 'pointer',
    '&:focus':{
      outline: 'none'
    }
  }
})

export default styles