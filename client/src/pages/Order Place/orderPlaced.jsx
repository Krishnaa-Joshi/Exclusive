// Main Component
import HeroSection from "@/component/home component/Hero Section/hero";
import NavBar from "@/component/common component/Navbar/navbar";
import Footer from "@/component/common component/footer/footer";

// Hooks


// SVGs
import OrderSucessfull from "../../assets/Ordered placed/order_sucessful.png"

function OrderPlaced(){

    const orderNoGenrator = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < 13; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
        }
        return result;     
    };

    const orderNo = orderNoGenrator();

    return (
        <>
            <HeroSection />
            <NavBar />
        
            <div>
                <div className="flex flex-col items-center h-96 justify-center mt-10">
                    <img src={OrderSucessfull} alt="" className="w-28 m-4"/>
                    <p className="text-6xl font-semibold">Thank You!</p>
                    <p className="text-2xl text-[#999999] my-1">Your order has been Confirmed</p>

                    <p className="text-lg text-[#999999]">{`Order No: ${orderNo}`}</p>

                    <button className="bg-[#DB4444] p-3 rounded-sm w-40 text-white mt-8">Order More</button>
                </div>

                <div className="flex h-96 justify-center mt-10">
                    <p className="text-5xl">Your Order Details</p>
                    <div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default OrderPlaced;