import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from '../components/NavLink'
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../firebase/firebase'

const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
  const { user } = useAuthState()

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center">
        <div className="flex justify-between w-full">
          <div className="flex space-x-7">
            <div>
              {/* IMG */}
              <h1 className="text-gray-800 text-4xl font-light m-0">Grouper</h1>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <NavLink label="Home" url="#" first />
              <NavLink label="Trips" url="#" />
              <NavLink label="Contact" url="#" />
              <NavLink label="About" url="#" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
              Log In
            </button>
            <button className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
              Sign Up
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setOpen(!isOpen)}
            >
              <svg
                className=" w-10 h-10 text-gray-500 hover:text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'flex' : 'hidden'} mobile-menu`}>
        <ul className="w-full">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {user ? (
          <button
            className="px-2 py-4 bg-red-300"
            onClick={() => signOut(getAuth())}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="px-2 py-4 bg-red-300">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navigation
