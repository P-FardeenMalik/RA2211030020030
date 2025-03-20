import React, { useState } from 'react'
import Footer from './Footer'
import MainContent from './MainContent'

const LeftNav = () => {
  const [activeLink, setActiveLink] = useState('Posts');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-gray-900 text-white w-64 h-[90.7vh] p-4 flex justify-between">
      <div className="flex flex-col justify-between h-full min-w-[220px]">
        <nav className="space-y-6 flex flex-col items-center justify-center w-full h-full text-center">
          {['Posts', 'Feed', 'Create Post', 'Profile'].map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => handleLinkClick(link)}
              className={`block py-2 px-4 rounded w-full font-semibold text-xl ${
                activeLink === link ? 'bg-gray-800' : 'hover:bg-gray-800'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
        <Footer />
      </div>
      <MainContent activeLink={activeLink} />
    </div>
  )
}

export default LeftNav
