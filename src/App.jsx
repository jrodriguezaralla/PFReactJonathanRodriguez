import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return(
    <>
      <NavBar/>
      <ItemListContainer
      greeting="¡Bienvenidos!"/>
    </>
  )
}

export default App
