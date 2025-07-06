import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assest'
import { NavLink } from 'react-router-dom'

const Shops = () => {
  // Use sodaimages from assets
  const sodaimages = assets.sodaimages

  // Dummy shop data for display
  const shopOverview = [
    {
      shop_id: 1,
      shop_name: "Fizz Factory",
      description: "Try our signature fizzy sodas and classic flavors.",
      stall_number: "A1",
      rating: 4.8,
      shop_image: sodaimages[0]
    },
    {
      shop_id: 2,
      shop_name: "Bubble Bliss",
      description: "Refreshing soda blends and unique taste experiences.",
      stall_number: "B2",
      rating: 4.7,
      shop_image: sodaimages[1]
    },
    {
      shop_id: 3,
      shop_name: "Sparkle Stop",
      description: "Chill with our sparkling sodas and coolers.",
      stall_number: "C3",
      rating: 4.6,
      shop_image: sodaimages[2]
    },
    {
      shop_id: 4,
      shop_name: "Pop Palace",
      description: "A palace of pop and soda flavors for everyone.",
      stall_number: "D4",
      rating: 4.9,
      shop_image: sodaimages[3]
    }
  ]

  return (
    <main className="max-w-6xl mx-auto px-2 py-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {shopOverview.map(shop => (
        <NavLink
          to={`/shop/${shop.shop_id}`}
          key={shop.shop_id}
          className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 group"
        >
          <div className="relative pb-[60%] overflow-hidden rounded-lg mb-3 bg-gray-100">
            <img
              src={shop.shop_image}
              alt={shop.shop_name}
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition"
              loading="lazy"
            />
            <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
              ⭐ {shop.rating}
            </span>
          </div>
          <h2 className="text-lg font-semibold mb-1 truncate">{shop.shop_name}</h2>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{shop.description}</p>
          <span className="inline-block text-xs text-gray-400">Stall: {shop.stall_number}</span>
        </NavLink>
      ))}
    </main>
  )
}

export default Shops
