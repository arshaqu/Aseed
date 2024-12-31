import React from "react";
import FooterImg from "../Assets/FooterImg.png";
import Logo from "../Assets/Aseed02.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-green-900 text-white py-10 montserrat"
      style={{
        backgroundImage: `url(${FooterImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <div className="flex justify-center items-center">
  <img src={Logo} alt="Logo" className="w-80 h-56 lg:w-64 lg:h-40 lg:ml-[-30px]" />
</div>

            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Together for equality, empowerment, and a brighter, inclusive society for all"
            </p>
        
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about-us" className="hover:text-yellow-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-yellow-500">
                 Mission
                </a>
              </li>
              <li>
                <a href="#newsevents" className="hover:text-yellow-500">
                  News & Events
                </a>
              </li>
              <li>
                <a href="#know_us" className="hover:text-yellow-500">
                  Know more
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500">
                  Contact Us
                </a>
              </li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500">🏠</span>
                <p>Munduparammbu.P.O., Malappuram Eranad Taluk Malappuram 676509 , Kerala</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500">✉️</span>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRZQQWNTvrhSVbVLxGmHnXqpnHRTZkfwpVgfPhKlZZXnCBbJnsZjlndsQxxKqvwfnqHNG'>www.officialaseed@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500">📞</span>
                <p>+91 9633645818</p>
              </li>
            </ul>
          </div>

          <div>
            <h3  className="font-bold text-lg mb-4">For More Follow Us On:</h3>
            <div className="flex" >

                <a href="https://www.instagram.com/aseed_kerala/profilecard/"><  PiInstagramLogoFill style={{width:'40px' , height:'100px'}} /></a>
                <a href="https://www.whatsapp.com/channel/0029VafT8iH7oQha2PP31o14"><  FaWhatsapp className="ml-3"  style={{width:'33px' , height:'100px'}} /></a>
                <a href="https://www.facebook.com/people/ASEED-Association-for-Social-Engineering-Entrepreneurship-Development/61552509620337/?mibextid=ZbWKwL"><FaFacebookSquare className="ml-3"  style={{width:'32px' , height:'100px'}} /></a>
                <a href="https://t.me/aseedkeralatelegram"><FaTelegram className="ml-3"  style={{width:'34px' , height:'100px'}} /></a>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
