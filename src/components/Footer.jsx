const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Supriya<span className="text-gold"> Banetiya</span>
            </h3>
            <p className="text-gray-300 mb-6">
              E-commerce & Store Specialist
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://linkedin.com/in/supriya-banetiya-9002a9245"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.711z"/>
                </svg>
              </a>
              <a
                href="mailto:supriyabanetiya03@gmail.com"
                className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5 text-navy"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://github.com/supriyabanetiya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Supriya Banetiya. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
