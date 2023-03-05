import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartContainer from "./components/CartContainer"
import Formulario from "./components/Formulario"
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
                        <Route exact path="/cart" element={<CartContainer/>}/>
                        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route exact path="/formulario" element={<Formulario/>}/>
                </Routes>
            </BrowserRouter>
        </ShoppingCartContext>
    )
}

export default App
