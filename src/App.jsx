
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';

export default function App(){

    return (
<div  style={{margin: "100px"}}>
 <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </div>

       
    )
}

