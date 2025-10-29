const Education = () => {
  const education = [
    {
      degree: 'BCA',
      institution: 'MDS University',
      location: 'Ajmer',
      year: '2021',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: 'Senior Secondary',
      institution: 'Mahila Ashram Public School',
      location: 'Bhilwara',
      year: '2018',
      icon: 'fas fa-book',
    },
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-4">
          <span className="text-gold">Education</span>
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg card-hover border-t-4 border-gold"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-navy rounded-full flex items-center justify-center text-3xl text-white">
                    <i className={edu.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{edu.degree}</h3>
                    <span className="text-gold font-semibold">{edu.year}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
