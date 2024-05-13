import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from './Pages/ContactUs/ContactUs'
import Products from './Pages/Products/Products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import { useState } from 'react'
import Cart from './Pages/Cart/Cart'

function App() {
  const [search, setSearch] = useState('')
 function productSerch(product) {
  setSearch(product)
  
 }
  return (
    <>
    <Navbar productSerch={productSerch} />
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about-us' element={<AboutUs/>}></Route>
    <Route path='/contact-us' element={<ContactUs/>}></Route>
    <Route path='/products' element={<Products searchValue={search}/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/products/:productId' element={<ProductDetails/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    
    </Routes>
    <Footer/>
    
      

    
     
    </>
  )
}

export default App
