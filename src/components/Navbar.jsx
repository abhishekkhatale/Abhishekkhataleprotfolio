"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            AK
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium hover:text-gray-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href).scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-black focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <li key={index} className="px-4 py-2">
                  <a
                    href={link.href}
                    className="block text-sm font-medium hover:text-gray-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href).scrollIntoView({
                        behavior: "smooth",
                      })
                      setIsOpen(false)
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Navbar

