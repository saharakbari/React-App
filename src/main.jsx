import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footter from './component/Footer.jsx';
import Navbar from './component/Navbar.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.jsx';
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
   
          <BrowserRouter>
        
        <Navbar></Navbar>
        <App></App>
        <Footter /> 
        </BrowserRouter>
    
    </Provider> 
);
