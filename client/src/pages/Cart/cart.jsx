// Main component
import HeroSection from "@/component/home component/Hero Section/hero";
import NavBar from "@/component/common component/Navbar/navbar";
import Path from "@/component/common component/pages path/path";
import Footer from "@/component/common component/footer/footer";

import { useContext } from "react";
import { Context } from "@/context";
import CardProduct from "@/component/cart component/cart Product/cartProduct";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { editCart,setEditCart,cartProducts } = useContext(Context);
  const navigate = useNavigate();

  const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const handleUpdateCart = ()=>{
    setEditCart(!editCart);
  }

  return (
    <div>
      <HeroSection />
      <NavBar />
      <Path />
      <div className="grid grid-cols-4  items-center justify-items-center mt-12">
        <div>
          <p className="font-semibold">Product</p>
        </div>
        <div>
          <p className="font-semibold">Price</p>
        </div>
        <div>
          <p className="font-semibold">Quatity</p>
        </div>
        <div>
          <p className="font-semibold">SubTotal</p>
        </div>
      </div>
      <div>
        {cartProducts.map((product) => (
           <CardProduct key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-between my-5 mx-24">
        <div>
          <button className="border-2 border-[#808080] rounded-md p-3 w-48 font-semibold" onClick={()=>navigate("/")}>
            Return To Shop
          </button>
        </div>
        <div>
          <button className="border-2 border-[#808080] rounded-md p-3 w-44 font-semibold" onClick={handleUpdateCart}>
            {editCart ? "Cancel" : "Update Cart" }
          </button>
        </div>
      </div>

      <div className="flex justify-end w-[38.7vw] my-16">
        <input
          type="text"
          placeholder="Coupon Code"
          className="focus:outline-none border-2 border-[#252525] rounded-sm p-2.5 w-72 mr-5"
        />
        <button className="bg-[#DB4444] text-white rounded-sm p-3 w-48 ">
          Apply Coupon
        </button>
      </div>
      <div className="flex justify-end p-20 relative bottom-48">
        <div className="border-2 border-black rounded-sm w-[30vw] p-4">
          <p className="font-semibold text-2xl ">Cart Total</p>
          <div className="flex font-medium justify-between p-2.5 my-2.5 border-b-2 border-b-[#999999]">
            <p>Subtotal: </p>
            <p>{`$${totalPrice.toFixed(2)}`}</p>
          </div>
          <div className="flex font-medium justify-between p-2.5 my-2.5 border-b-2 border-b-[#999999]">
            <p>Shipping: </p>
            <p className="text-green-600">Free</p>
          </div>
          <div className="flex font-medium justify-between p-2.5 my-2.5">
            <p>Total: </p>
            <p>{`$${totalPrice.toFixed(2)}`}</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#DB4444] text-white rounded-sm p-3 w-60" onClick={()=>navigate("/checkout")}>
              Procees To Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CartPage;
