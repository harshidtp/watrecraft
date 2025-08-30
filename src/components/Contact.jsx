import React, { useState } from "react";
import assets from "../assets/assets";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", contact: "", description: "" });
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center p-8 ">
      <div className="w-full max-w-7xl bg-gray-50 rounded-2xl shadow-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 dark:bg-gray-900 ">
        
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left dark:text-white/80">
            Contact Us
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-base font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-2 w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email or Mobile */}
            <div>
              <label className="block text-base font-medium text-gray-700">
                Email or Mobile
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your email or mobile"
                required
                className="mt-2 w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-base font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                required
                className="mt-2 w-full px-5 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-gray-600 text-white text-lg font-semibold px-6 py-4 rounded-lg shadow hover:bg-gray-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Logo & Address */}
        <div className="flex flex-col items-center justify-center text-center lg:text-left p-6">
          <img
            src={assets.footer_icon}// 👉 replace with your actual logo path
            alt="Company Logo"
            className="w-40 h-40 object-contain mb-8"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Watercraft</h3>
          <p className="text-gray-600 text-lg mb-1">123 Pure Street</p>
          <p className="text-gray-600 text-lg mb-1">Hydration City, HC 45678</p>
          <p className="text-gray-600 text-lg mb-1">Email: info@watercraft.com</p>
          <p className="text-gray-600 text-lg">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}
