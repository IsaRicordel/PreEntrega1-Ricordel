import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import Item from './components/Item/Item';
import CategoryPage from './components/CategoryPage/CategoryPage';
import logo from './logo.svg';
import CartWidget from './components/CartWidget/CartWidget';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter className='App'> 
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Products/:category' element={<CategoryPage/>}/>
        <Route path='/Products/:category/:itemId' element={<Item/>}/>
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
