import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemCount from "./components/ItemCount"

const App = () => {
  return(
    <>
      <NavBar/>
      <ItemListContainer
      greeting="¡Bienvenidos!"/>
      <ItemCount/>
    </>
  )
}

export default App
