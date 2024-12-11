import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Stoira Logo"
                width={30}
                height={20}
                className="h-8 w-auto"
              />
              <span className="text-white text-xl font-bold" style={{
                textShadow: '0 0 10px rgba(236, 72, 153, 0.7), 0 0 20px rgba(236, 72, 153, 0.5)'
              }}>
                STOIRA
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

