//Components
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/HomePage/Navbar"
import Products from './components/ProductsPage/ProductsPage'
import ProductDetails from "./components/ProductsPage/ProductDetails";
import Cart from "./components/CartPage/Cart";

//Context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

//React router dom
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ProductsContextProvider >
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/*" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes >
      </CartContextProvider >
    </ProductsContextProvider >
  );
}

export default App;
