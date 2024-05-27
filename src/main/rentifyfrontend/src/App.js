import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';
import BuyerPage from './components/BuyerPage';
import Seller from './components/SellerPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Navbar/> */}
      {/* <BuyerPage/> */}
     
     <Routes>
        
     
    
      <Route path="/Homepage" element={<Homepage/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/seller" element={<Seller/>} />
      </Routes>
      
            
      </BrowserRouter>
     
    </div>
  );
}

export default App;
