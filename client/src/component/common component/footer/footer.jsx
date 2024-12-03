// SVGs and IMGs
import AppStore from "../../../assets/Footer assets/appStore.svg"
import PlayStore from "../../../assets/Footer assets/playStore.svg"
import Send from "../../../assets/Footer assets/send.svg"
import Twitter from "../../../assets/Footer assets/X.svg"
import QRCode from "../../../assets/Footer assets/QRcode.png"
import Instagram from "../../../assets/Footer assets/instagram.svg"
import Facebook from "../../../assets/Footer assets/facebook.svg"
import Linkedin from "../../../assets/Footer assets/linkedin.svg"


function Footer() {
  return (
    <>
      <div className="h-80 bg-black text-white flex justify-evenly items-center w-full">

        {/* basic info */}
        <div className="h-[166px]">
          <h2 className="font-bold text-xl mb-4">Exclusive</h2>
          <h5 className="font-semibold mb-4">Subscribe</h5>
          <p className="mb-3">Get 10% off your first order</p>
          <div className="flex outline outline-white outline-2 rounded-sm p-2 w-[86%]">
            <input
              className="bg-transparent w-[84%] focus:outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <img src={Send} alt="send" />
          </div>
        </div>

        {/* contact details */}
        <div>
          <h2 className="font-bold text-xl mb-4">Section</h2>
          <p className="mb-3">
            Icfai University, jaipur,
            <br />
            Rajasthan, India.
          </p>
          <p className="mb-3">exclusive@gmail.com</p>
          <p className="mb-3">+91 9824654323</p>
        </div>

        {/* Different Pages Link */}
        <div className="h-[178px]">
          <h2 className="font-bold text-xl mb-4 ">Account</h2>
          <p className="mb-2">My Account</p>
          <p className="mb-2">Login / Register</p>
          <p className="mb-2">Cart</p>
          <p className="mb-2">Wishlist</p>
          <p className="mb-2">shop</p>
        </div>

        {/* other Details */}
        <div>
          <h2 className="font-bold text-xl mb-4 ">Quick Link</h2>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Terms of Use</p>
          <p className="mb-2">FAQ</p>
          <p className="mb-2">Contact</p>
        </div>

        {/* Mobile App */}
        <div>
          <h2 className="font-bold text-xl mb-4 ">Download App</h2>
          <p className="mb-2 text-[#A9A9A9]">
            Save ₹250 with App New User only
          </p>
          <div className="flex mb-4">
            <img 
              className="h-16"
              src={QRCode}
              alt="QR Code"
            /> {/* QR Code */}
            <div className="flex flex-col"> {/* paly store and app Store Link */}
              <img
                className="h-7 mb-1.5"
                src={PlayStore}
                alt="Play Store"
              />
              <img
                className="h-7"
                src={AppStore}
                alt="App Store"
              />
            </div>
          </div>          
          <div className="flex w-40 justify-between"> {/* Social Media Links */}  
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="X" />
            <img src={Instagram} alt="Instagram" />
            <img src={Linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div className="bg-black w-full border-t-[#141414] border-t-2 flex justify-center items-center h-14">
        <p className="text-[#3D3D3D] ">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
