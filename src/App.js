import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ShopContextProvider from './context/shopcontext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/cart' element={<Cart></Cart>}>
          </Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
