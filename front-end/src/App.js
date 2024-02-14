
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import LoginSingup from './pages/LoginSingup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Cart from './pages/Cart.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      {/* <Route path=':/productId' element={<Product/>}/> */}
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSingup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
