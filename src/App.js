import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './Pages/Cart/Cart'
import Item from './components/Item/Item'
import CategoryPage from './components/CategoryPage/CategoryPage'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './Context/CarritoContext'
import Checkout from './components/Checkout/Checkout'

function App() {
  
  return (
  <CarritoProvider>
    <BrowserRouter className='App'>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/Products' element={<ItemListContainer />}/>
        <Route path='/Cart' element={<Cart />}/>
        
        <Route path='/Products/:category' element={<CategoryPage/>}/>
        <Route path='/Products/:category/:id' element={<Item />}/>
        <Route path='/Checkout' element={<Checkout />}/>

      </Routes>
    </BrowserRouter>
  </CarritoProvider>
  )
}

export default App;
