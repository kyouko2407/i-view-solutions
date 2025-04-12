import Link from 'next/link'
import Logo from './Logo'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
              Search Centers
            </Link>
            <Link href="/practice-tests" className="text-gray-600 hover:text-blue-600 transition-colors">
              Practice Tests
            </Link>
            <Link href="/vr-tour" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <span>VR Tour</span>
              <span className="ml-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">New</span>
            </Link>
            <Link href="/consultation" className="text-gray-600 hover:text-blue-600 transition-colors">
              AI Consultation
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-blue-600 transition-colors">
              Community
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
              Resources
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/auth/signin" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/auth/signup" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 