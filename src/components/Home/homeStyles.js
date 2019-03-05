const styles = ({
  position: {
    gridArea: '2 / 1 / 4 / 4 ',
    backgroundColor: 'black',
  },
  homeContainer: { 
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    '& > div':{
      height: '100%',
      width: '100%',
    }
  },
  titleHome: {
    color: 'white',
    fontSize: '4vmax',
    position: 'absolute',
    top: '47%',
    left: '4%',
    borderBottom: '1px solid #fff',
  }
})

export default styles