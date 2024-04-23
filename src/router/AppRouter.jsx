import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Products from "../pages/Products"
import About from "../pages/About"
import Notfound from "../pages/Notfound"

const AppRouter = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
