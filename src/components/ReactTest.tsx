function ReactTest() {
  const handleButton = () => {
    console.log('ddd')
  }
  return(
    <div>
      <button onClick={handleButton}>
      test react
      </button>
    </div>
  )
}

export default ReactTest