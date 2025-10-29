import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1))
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [navItems])

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-b-2xl max-w-7xl bg-white/10 backdrop-blur-md shadow-lg py-3`}
    >
      <nav className="container-custom px-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-bold text-navy hover:text-gold transition-colors duration-300 mr-12"
          >
            Supriya<span className="text-gold">B.</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${activeSection === item.href.slice(1) ? 'text-gold' : 'text-navy'} hover:text-gold transition-colors duration-300 font-medium`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="https://linkedin.com/in/supriya-banetiya-9002a9245"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-navy hover:text-gold transition-colors duration-300 ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <button
            className="md:hidden text-navy hover:text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${activeSection === item.href.slice(1) ? 'text-gold' : 'text-navy'} hover:text-gold transition-colors duration-300 font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
