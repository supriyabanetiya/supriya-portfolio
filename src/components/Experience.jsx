const Experience = () => {
  const experiences = [
    {
      company: 'Ambikeshwar Enterprises',
      position: 'E-commerce & Stock Manager',
      period: '11/2024 – 05/2025',
      location: 'Jaipur',
      details: [
        'Managed Amazon & Flipkart sales operations, ensuring optimal product visibility and performance',
        'Coordinated order fulfillment processes and customer communication for seamless delivery experience',
        'Maintained real-time inventory tracking and dispatch control to minimize stockouts and overstock',
        'Improved customer satisfaction ratings through proactive problem-solving and timely resolution',
      ],
    },
    {
      company: 'EXL Services',
      position: 'Transport & Logistics Executive',
      period: '05/2024 – 10/2024',
      location: 'Jaipur',
      details: [
        'Optimized logistics operations and transportation routes to reduce delivery time and costs',
        'Coordinated with multiple stakeholders including vendors, transporters, and warehouse teams',
        'Managed shipment tracking and ensured timely delivery to meet customer expectations',
        'Resolved logistics issues efficiently to maintain operational continuity',
      ],
    },
    {
      company: 'Mantri Enterprises',
      position: 'E-commerce & Stock Manager',
      period: '04/2021 – 04/2024',
      location: 'Bhilwara',
      details: [
        'Led e-commerce operations on Amazon and Flipkart platforms for 3+ years',
        'Managed order processing, fulfillment, and customer coordination to ensure high satisfaction',
        'Implemented inventory management systems to track stock levels and minimize discrepancies',
        'Analyzed sales data and market trends to recommend strategies for business growth',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-4">
          Work <span className="text-gold">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:mr-auto md:w-1/2 md:pr-12' : 'md:ml-auto md:w-1/2 md:pl-12'
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gold rounded-full transform md:-translate-x-1/2"></div>
                
                <div className="ml-16 md:ml-0">
                  <div className="bg-white p-6 rounded-lg shadow-lg card-hover border-l-4 border-gold">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-navy">{exp.position}</h3>
                    </div>
                    <div className="flex flex-col gap-1 mb-4">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl text-gold font-semibold">{exp.company}</h4>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">{exp.location}</span>
                      </div>
                      <div className="text-sm text-navy bg-gold/10 px-3 py-1 rounded-full font-medium whitespace-nowrap self-start">{exp.period}</div>
                    </div>
                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-gold mt-1">▸</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
