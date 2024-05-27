import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';
import BuyerPage from './components/BuyerPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Navbar/> */}
     
      <Routes>
        
      {/* <Route path="/" element={<Navbar/>} /> */}
      <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<Homepage/>} />

      
        
      </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
