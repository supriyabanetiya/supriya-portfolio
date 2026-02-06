const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/supriya-portfolio/resume.pdf'
    link.download = 'Resume.pdf'
    link.click()
  }

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center pt-20">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
          

            <h1 className="text-5xl md:text-7xl font-bold text-navy leading-tight">
              Hi, I'm{' '}
              <span className="text-gold">Supriya</span>
            </h1>
        
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-navy text-white rounded-full text-sm font-medium">
                E-commerce Growth Specialist
              </span>
              <span className="px-4 py-2 bg-gold/10 text-navy rounded-full text-sm font-medium">
              Multiple Marketplace Expert

              </span>
             
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Results-driven professional with <strong>4+ years</strong> of experience driving customer satisfaction and operational excellence in e-commerce operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadResume}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
              
              <a
                href="https://linkedin.com/in/supriya-banetiya-9002a9245"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold text-navy mb-1">4+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-1">6+</div>
                <div className="text-sm text-gray-600">Platforms</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-1">100%</div>
                <div className="text-sm text-gray-600">Dedicated</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-[600px] h-[600px] mt-8 ml-8">
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden bg-white z-10">
                <img
                  src="./supriya-Photoroom.png"
                  alt="Supriya Banetiya"
                  className="w-full h-full object-contain"
                  style={{ display: 'block', minWidth: '100%', minHeight: '100%' }}
                />
              </div>
              {/* Overlay Icons */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-10 left-10 opacity-30">
                  <svg className="w-16 h-16 text-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0016.382 4H4.414l-.66-2.642A1 1 0 002.766 1H3zM6.5 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  </svg>
                </div>
                <div className="absolute top-20 right-20 opacity-30">
                  <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6a3 3 0 0 0-6 0v1H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM10 6a1 1 0 0 1 2 0v1h-2V6zm8 13H6V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                  </svg>
                </div>
                <div className="absolute bottom-20 left-20 opacity-30">
                  <svg className="w-14 h-14 text-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <div className="absolute bottom-10 right-10 opacity-30">
                  <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                <div className="absolute top-1/2 left-5 opacity-30">
                  <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
                  </svg>
                </div>
                <div className="absolute top-1/3 right-5 opacity-30">
                  <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
