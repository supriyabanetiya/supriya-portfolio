const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-4">
            About <span className="text-gold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0 ml-4">
              <div className="w-96 h-96 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src="./a.jpg"
                  alt="Supriya - E-commerce Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Results-driven professional with{' '}
                <strong className="text-navy">4+ years</strong> of experience building and scaling online businesses across{' '}
                <strong className="text-gold">Amazon, Flipkart, Meesho, JioMart, Blinkit, and Myntra                </strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Specialized in account setup, catalog optimization, product listings, and performance strategy that turn visitors into loyal customers. Focused on driving measurable growth and operational excellence for every brand I work with.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-black p-6 rounded-lg text-white">
                  <div className="text-3xl font-bold mb-1">4+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="btn-outline p-6 rounded-lg text-navy bg-transparent border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-300">
                  <div className="text-3xl font-bold mb-1">6+</div>
                  <div className="text-sm opacity-90">Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
