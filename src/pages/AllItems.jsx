import React from 'react'
import { assets } from '../assets/assest'

const sodaItems = [
  {
    item_id: 1,
    item_name: "Classic Lemon Soda",
    item_price: 30,
    item_url: assets.sodaimages[0]
  },
  {
    item_id: 2,
    item_name: "Orange Fizz",
    item_price: 35,
    item_url: assets.sodaimages[1]
  },
  {
    item_id: 3,
    item_name: "Grape Splash",
    item_price: 40,
    item_url: assets.sodaimages[2]
  },
  {
    item_id: 4,
    item_name: "Pineapple Pop",
    item_price: 38,
    item_url: assets.sodaimages[3]
  }
]

// Repeat images 3 times
const repeatedItems = Array(3)
  .fill(sodaItems)
  .flat()
  .map((item, idx) => ({
    ...item,
    item_id: idx + 1
  }))

const AllItems = () => {
  return (
    <main className="max-w-6xl mx-auto py-8 px-2 md:px-6">
      <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">Vingets Soda Company - Menu</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {repeatedItems.map(item => (
          <div
            key={item.item_id}
            className="relative rounded-2xl shadow-xl overflow-hidden flex flex-col justify-end min-h-[320px] bg-white group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.item_url}
              alt={item.item_name}
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-6 flex flex-col h-full justify-end">
              <h2 className="text-xl font-bold text-red-700 mb-2">{item.item_name}</h2>
              <p className="text-yellow-600 font-bold text-lg mb-4">₹{item.item_price}</p>
              <div className="flex flex-row gap-3">
                <button className="bg-red-500 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold shadow transition w-fit focus:outline-none focus:ring-2 focus:ring-red-400">
                  Buy
                </button>
                <button className="bg-yellow-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow transition w-fit focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AllItems
