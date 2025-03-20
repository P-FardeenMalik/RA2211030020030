import React from 'react'

const TopNav = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <h1 className="text-xl font-bold px-10">Social Minions</h1>
      </div>
      <div className="flex-1 mr-8 ml-10">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
          Add New Friend
        </button>
      </div>
    </div>
  )
}

export default TopNav
