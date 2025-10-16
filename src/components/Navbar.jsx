import { Link } from 'react-router-dom'
import { Diamond } from 'lucide-react'

const Navbar = ({ showAuthButtons = true }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Diamond className="w-6 h-6 text-primary" fill="currentColor" />
            <span className="text-xl font-bold text-gray-900">SokoDigital</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/explore" className="text-gray-700 hover:text-gray-900 font-medium">
              Explore
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
          </div>
          
          {showAuthButtons && (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-gray-900 font-medium">
                Log In
              </Link>
              <Link to="/register" className="btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
