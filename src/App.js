import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Product from "./pages/Products";
import Login from "./pages/Login";
import Notfound from "./pages/404";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";

// Layout with Navbar and Footer
const DefaultLayout = ({ children }) => (
  <section>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </section>
);

// Layout without Navbar and Footer
const NoLayout = ({ children }) => <section>{children}</section>;

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route path="/login" element={<NoLayout>{<Login />}</NoLayout>} />
      <Route path="/admin/add-product" element={isLoggedIn ? <NoLayout>{<AddProduct />}</NoLayout> : <Navigate to="/login" />} />
      <Route path="/about" element={<DefaultLayout>{<About />}</DefaultLayout>} />
      <Route path="/products" element={<DefaultLayout>{<Product />}</DefaultLayout>} />
      <Route
        path="products/:id"
        element={<DefaultLayout>{<ProductDetails />}</DefaultLayout>}
      />
      <Route path="/:id" element={<DefaultLayout>{<ProductDetails />}</DefaultLayout>} />
      <Route path="/booking" element={<DefaultLayout>{<Booking />}</DefaultLayout>} />
      <Route path="/contact" element={<DefaultLayout>{<Contact />}</DefaultLayout>} />
      <Route path="/cart" element={<DefaultLayout>{<Cart />}</DefaultLayout>} />
      <Route path="*" element={<DefaultLayout>{<Notfound />}</DefaultLayout>} />
    </Routes>
  );
};

export default App;
