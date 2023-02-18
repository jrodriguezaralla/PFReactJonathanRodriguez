import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/category/:category" element={<ItemListContainer/>}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
