import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <nav className="h-[70px]  px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-gradient-to-r from-gray via-gray-900 to-gray-800 fixed top-0 w-full z-50">

            {/* Logo */}


            {/* Desktop Nav */}
            <ul className="text-gray-200 md:flex hidden items-center gap-20 font-medium">
                <li><a className="hover:text-[#FF0066] transition" href="#home">Home</a></li>
                <li><a className="hover:text-[#FF0066] transition" href="#education">Education</a></li>
                <li><a className="hover:text-[#FF0066] transition" href="#skills">Skills</a></li>
                <li><a className="hover:text-[#FF0066] transition" href="#projects">Projects</a></li>
            </ul>

            {/* Desktop Button */}
            <motion.button
        className=" px-6 py-3 bg-[#FF0066] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#e6005c] transition"
        onClick={() => window.open('https://drive.google.com/file/d/1mQC33cMz-TkWQnsbxdtRDwPULIszcPt-/view?usp=sharing', '_blank')}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        Resume
      </motion.button>

            {/* Mobile Menu Button */}
            <button
                aria-label="menu-btn"
                type="button"
                className="menu-btn inline-block md:hidden active:scale-90 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF0066" viewBox="0 0 30 30">
                    <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                </svg>
            </button>

            {/* Mobile Dropdown */}
            <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 p-6 hidden md:hidden shadow-lg">
                <ul className="flex flex-col space-y-4 text-gray-200 text-lg">
                    <li><a href="#" className="hover:text-[#FF0066] transition">Home</a></li>
                    <li><a href="#" className="hover:text-[#FF0066] transition">Services</a></li>
                    <li><a href="#" className="hover:text-[#FF0066] transition">Portfolio</a></li>
                    <li><a href="#" className="hover:text-[#FF0066] transition">Pricing</a></li>
                </ul>
                <button
                    type="button"
                    className="bg-[#FF0066] text-white mt-6 inline md:hidden text-sm hover:bg-[#e6005c] active:scale-95 transition-all w-40 h-11 rounded-full shadow-md"
                >
                    Get started
                </button>
            </div>
        </nav>
    )
}

export default Header
