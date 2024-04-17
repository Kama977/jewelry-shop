import "./App.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Aboutus from "./Pages/Aboutus";
import Faq from "./Pages/Faq";
import Cart from "./Components/Cart";
import Account from "./Components/Account";
import { CartProvider } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { ToastContainer } from "react-toastify";
import Toptobtn from "./Components/Toptobtn";
import Wishlist from "./Pages/Wishlist";
import { WishlistProvider } from "react-use-wishlist";
import Register from "./Components/Register";
import Productreview from "./Components/Productreview";
import CheckoutSuccess from "./Pages/CheckoutSuccess";
import AdminPanel from "./Pages/AdminPanel";
import { useContext, useEffect, useState } from "react";
import ContextProvider from "./GlobalContext/GlobalContext";
import SingleBlog from "./Pages/SingleBlog";
import { DarkModeContext } from "./GlobalContext/Theme";

function App() {
  const { t, i18n } = useTranslation();

  const [token, setToken] = useState(false);
  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
      if(sessionStorage.getItem('token')){
        let data = JSON.parse(sessionStorage.getItem('token'))
        setToken(data)
      }
  }, [])

  const {darkMode} = useContext(DarkModeContext)


  return (
    <main className={darkMode ? 'dark' : "light"}>
    <BrowserRouter>
    
      <ContextProvider>
        <WishlistProvider>
          <CartProvider>
            <Header token={token} />
            <ToastContainer
              position="bottom-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<Productreview />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/cart" element={<Cart token={token}/>} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/account" element={<Account setToken={setToken}/>} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/succesful" element={<CheckoutSuccess />} />
            </Routes>
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </ContextProvider>
    </BrowserRouter>
    </main>
  );
}

export default App;
