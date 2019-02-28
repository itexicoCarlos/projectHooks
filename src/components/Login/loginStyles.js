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
    height: '50%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& input': {
      margin: '1em',
      padding: '1em',
      width: '50%'
    }
  },
  buttonFormContainer: {
    padding: '1em',
  }
})

export default styles