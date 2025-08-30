import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import assets from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Logo + Tagline */}
        <div>
          <img src={assets.logo} alt="Company Logo" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm">
            Watercraft — Water for life. Pure, refreshing hydration wherever you are.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#products" className="hover:text-blue-400 transition">Products</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">123 Pure Street, Hydration City, HC 45678</p>
          <p className="text-sm mb-2">Email: info@watercraft.com</p>
          <p className="text-sm mb-4">Phone: +1 (555) 123-4567</p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
              <FaInstagram className="text-white text-sm" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-sky-400 transition">
              <FaTwitter className="text-white text-sm" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn className="text-white text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Watercraft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
