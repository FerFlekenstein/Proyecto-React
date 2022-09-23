import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import NotFound from "./components/NotFound";
import CartContainer from "./components/containers/CartContainer";
import ShopProvider from "./context/CartContext";
import ItemListContainer from "./components/containers/ItemListContainer";

function App() {

  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  )
}

export default App
