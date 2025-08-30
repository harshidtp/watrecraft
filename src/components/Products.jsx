import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets' // ensure product images exist here

function Products() {
  const products = [
    {
      id: 1,
      name: "300ml Bottle",
      desc: "Perfect for on-the-go hydration with natural minerals.",
      img: assets.bottle_img1,
    },
    {
      id: 2,
      name: "1L Bottle",
      desc: "Ideal for daily use, keeps you refreshed throughout the day.",
      img: assets.bottle_img2,
    },
    {
      id: 3,
      name: "20L Bottle",
      desc: "Family size, great for home, office or long journeys.",
      img: assets.bottle_img3,
    },
  ]

  return (
    <div id="products" className="py-16 px-4 sm:px-8 lg:px-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Our Products
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden flex flex-col items-center p-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Image sizing responsive */}
            <img
              src={product.img}
              alt={product.name}
              className="w-32 h-48 sm:w-40 sm:h-64 lg:w-48 lg:h-72 object-contain mb-4"
            />

            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {product.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Products
