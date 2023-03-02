import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ShoppingCartContext from "./context/ShoppingCartContext"


const App = () => {
    return(
        <ShoppingCartContext>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<ItemListContainer/>}/>
                    <Route exact path="/category/:category" element={<ItemListContainer/>}/>
                        <Route exact path="/cart" element={<Cart/>}/>
                        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                </Routes>
            </BrowserRouter>
        </ShoppingCartContext>
    )
}

export default App
