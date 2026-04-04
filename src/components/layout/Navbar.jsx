import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Mail, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Practice Areas', path: '/practice-areas' },
  { label: 'Attorneys', path: '/attorneys' },
  { label: 'Blog', path: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className={`text-2xl font-bold tracking-wider ${scrolled ? 'text-primary' : 'text-white'}`}>
            Y.A.R
          </span>
          <span className={`text-[10px] uppercase leading-tight hidden sm:block ${scrolled ? 'text-muted' : 'text-white/70'}`}>
            Law Firm
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`pb-1 transition-colors ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'border-b-2 border-[#8B0000] text-primary'
                      : 'border-b-2 border-[#8B0000] text-primary'
                    : scrolled
                      ? 'text-secondary hover:text-primary'
                      : 'text-primary hover:text-white hover:border-b-2 border-[#8B0000]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search className={`w-5 h-5 cursor-pointer ${scrolled ? 'text-primary' : 'text-white'}`} />
          <Mail className={`w-5 h-5 cursor-pointer hidden sm:block ${scrolled ? 'text-primary' : 'text-white'}`} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-6 py-3 text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-primary bg-light-gray'
                      : 'text-secondary hover:bg-light-gray'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
