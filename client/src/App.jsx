import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/home";
import AboutPage from "./pages/About/about";
import ContactPage from "./pages/Contact/contact";
import CartPage from "./pages/Cart/cart";
import WishListPage from "./pages/wishList/wishList";
import UserAccoutPage from "./pages/Account/account";
import NotFoundPage from "./pages/Not Found/404";
import AuthPage from "./pages/Auth Page/AuthPage";
import { useContext } from "react";
import { Context } from "./context";
import CheckOutPage from "./pages/checkOut/checkOutPage";
import ProductDetailsPage from "./pages/Product details page/productDetailPage";

function App() {

  const {isLogin} = useContext(Context);

  return (
    <>
    {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signUp" element={<AuthPage/>} />
        <Route path="/account" element={<UserAccoutPage />} />
        <Route path="/checkout" element={<CheckOutPage/>} />
        <Route path="/OrderPlaced" element={<CheckOutPage/>} />
        <Route path="/product/:id" element={<ProductDetailsPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;