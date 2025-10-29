import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('achievements')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: 100,
      suffix: '+',
      title: 'PROJECTS COMPLETED',
      description: 'Successfully executed product listings, customer support & order operations for multiple e-commerce businesses.'
    },
    {
      number: 50,
      suffix: '+',
      title: 'ORDERS HANDLED DAILY',
      description: 'Managed complete order fulfillment ensuring timely dispatch.'
    },
    {
      number: 5000,
      suffix: '+',
      title: 'CUSTOMER QUERIES RESOLVED',
      description: 'Delivered fast responses boosting customer satisfaction.'
    },
    {
      number: 100,
      suffix: '%',
      title: 'INVENTORY ACCURACY',
      description: 'Maintained stock updates with zero mismatch tolerance.'
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-transparent">
      <div className="container-custom px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-extrabold text-navy mb-2">
                    {isVisible && (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2}
                        delay={index * 0.1}
                      />
                    )}
                    {stat.suffix}
                  </div>
                  <h3 className="text-navy font-semibold tracking-wide uppercase text-sm mb-3">
                    {stat.title}
                  </h3>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
