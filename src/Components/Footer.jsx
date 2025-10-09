import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaHome } from "react-icons/fa";

import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white">
      <div className="flex justify-between px-8 md:px-30 pt-5 border-b border-gray-700">
        <div className="flex items-center">
          <img className="md:w-[50px] w-[30px] " src="/logo.png" alt="" />
          <h1 className="ml-2">HERO.IO</h1>
        </div>
        <div>
          <h1 className="font-semibold ">Social Links</h1>
          <div>
            <span className="flex gap-4 py-2">
              <BsTwitterX></BsTwitterX>
              <LiaLinkedin></LiaLinkedin>
              <FaFacebook></FaFacebook>
            </span>
          </div>
        </div>
      </div>
      <p className="text-center py-2 text-sm">
        Copyright © 2025 - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
