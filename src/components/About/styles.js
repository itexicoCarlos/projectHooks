const styles = ({
  position: {
    gridArea: '2 / 1 / 4 / 4 ',
    backgroundColor: 'white',
    borderTop: '1px solid #ccc'
  },
  aboutContainer: { 
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
  aboutMe: {
    grid: {
      row: '1/3',
      column: '1/3'
    },
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '1em',
    '& > p': {
      color: 'white'
    }
  },
  projectsPosition: {
    grid: {
      row: '1/3',
      column: '3/7'
    }
  },
  projectsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'silver'
  }
})
export default styles
