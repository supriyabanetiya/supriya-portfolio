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
                href="tel:+916376084280"
                className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Phone"
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
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
