const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Document from supriya.pdf'
    link.download = 'Supriya_Banetiya_Resume.pdf'
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
              <div className="relative w-full h-full overflow-hidden bg-white">
                <img
                  src="./e.png"
                  alt="Supriya Banetiya"
                  className="w-full h-full object-contain"
                  style={{ display: 'block', minWidth: '100%', minHeight: '100%' }}
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
