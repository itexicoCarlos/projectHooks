const styles = ({
  appContainer: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '4em auto 3em',
    '& div:nth-child(2)':{
      gridArea: '2 / 1 / 4 / 4'
    }
  }
})

export default styles