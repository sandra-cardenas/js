import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import NavBarComponent from "../components/navBarComponent/navBarComponent"
import { ItemDetailContainer } from "../pages/ItemDetailContainer"
import { Category } from "../pages/Category"
import { Cart } from "../pages/Cart"

export const  MainRouter = () => {
  return (
    <BrowserRouter> 
     <NavBarComponent />
    <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>

        <Route path='/category/:id' element={<Category/>}/>
        <Route path='/cart' element={<Cart/>}/> 

    </Routes>

    </BrowserRouter>
  )
}
