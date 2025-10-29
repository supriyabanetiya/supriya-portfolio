import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/mzzkrwoo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert(
          `Thank you for your message, ${formData.name}! I'll get back to you soon.`
        )
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      type: 'Email',
      value: 'supriyabanetiya03@gmail.com',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:supriyabanetiya03@gmail.com',
    },
    {
      type: 'Phone',
      value: '+91-6376084280',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+916376084280',
    },
    {
      type: 'LinkedIn',
      value: 'Supriya Banetiya',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      link: 'https://linkedin.com/in/supriya-banetiya-9002a9245',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-4">
          Get In <span className="text-gold">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations,
                or answering any questions you may have. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.type === 'LinkedIn' ? '_blank' : undefined}
                    rel={info.type === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-navy rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {info.type}
                      </p>
                      <p className="text-navy font-semibold group-hover:text-gold transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
