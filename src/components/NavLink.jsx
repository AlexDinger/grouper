import React from 'react'

const NavLink = ({ label, url, first }) => {
  return (
    <a
      href={url}
      className={`py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 ${
        first ? 'border-b-4 border-green-500' : ''
      }`}
    >
      {label}
    </a>
  )
}

export default NavLink
