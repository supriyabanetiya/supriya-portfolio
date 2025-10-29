const Skills = () => {
  const skills = [
    {
      name: 'E-commerce Operations (Amazon/Flipkart)',
      level: 95,
      icon: 'fas fa-shopping-cart',
    },
    {
      name: 'Order Processing & Dispatch',
      level: 92,
      icon: 'fas fa-box',
    },
    {
      name: 'Customer Service & Communication',
      level: 90,
      icon: 'fas fa-comments',
    },
    {
      name: 'Inventory & Stock Management',
      level: 88,
      icon: 'fas fa-chart-bar',
    },
    {
      name: 'Excel / Google Sheets Reporting',
      level: 85,
      icon: 'fas fa-file-excel',
    },
    {
      name: 'Problem Solving',
      level: 92,
      icon: 'fas fa-tools',
    },
    {
      name: 'Team Collaboration',
      level: 88,
      icon: 'fas fa-users',
    },
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-4">
          My <span className="text-gold">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-lg card-hover border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <i className={`${skill.icon} text-2xl text-gold`}></i>
                  <h3 className="text-xl font-semibold text-navy">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-navy rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-right font-medium">
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
