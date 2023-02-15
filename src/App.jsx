import { BrowserRouter } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return(
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </BrowserRouter>
  )
}

export default App
