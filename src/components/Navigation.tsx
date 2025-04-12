import Link from 'next/link'
import { useState } from 'react'
import VSolutionsLogo from './VSolutionsLogo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <VSolutionsLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/search"
              className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              Find Centers
            </Link>
            <Link
              href="/practice-tests"
              className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              Practice Tests
            </Link>
            <Link
              href="/vr-tour"
              className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              VR Tour
              <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                New
              </span>
            </Link>
            <Link
              href="/ai-consultation"
              className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              AI Consultation
            </Link>
            <Link
              href="/community"
              className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              Community
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              Resources
            </Link>
            <button className="ml-8 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/search"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Find Centers
            </Link>
            <Link
              href="/practice-tests"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Practice Tests
            </Link>
            <Link
              href="/vr-tour"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              VR Tour
              <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                New
              </span>
            </Link>
            <Link
              href="/ai-consultation"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              AI Consultation
            </Link>
            <Link
              href="/community"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Community
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Resources
            </Link>
            <div className="mt-4 px-3">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 