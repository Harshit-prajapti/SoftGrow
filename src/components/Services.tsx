import React from 'react';
import { BarChart3, Database, Settings, Users, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Website Design and Development',
      description: 'There is no business in current times that can stay away from the internet and what the web design and development company can do for them is where we come in. So its not just about building a web presence that is the best in design and technology.',
      features: ['Demand Forecasting', 'Capacity Planning', 'Resource Optimization', 'Scenario Analysis']
    },
    {
      icon: Database,
      title: 'Software Development',
      description: 'Need a web application development for your e-commerce ideas? Web development division of MIS offers hi-end web design and development, professional web applications and e-commerce solutions development for your business.',
      features: ['Real-time Dashboards', 'Performance Metrics', 'Trend Analysis', 'Predictive Insights']
    },
    {
      icon: Settings,
      title: 'Business Intelligence Consulting',
      description: 'In today’s information age, data is generated in thousands of tera bytes everyday. This data contains lots of hidden information and patterns buried inside them. Many organisations still are not able to take full advantage of this hidden source of wealth with them.',
      features: ['Custom Modules', 'API Integration', 'Workflow Automation', 'Legacy System Integration']
    },
    {
      icon: Users,
      title: 'Consultation & Strategy',
      description: 'Expert guidance to optimize your production planning processes and maximize efficiency.',
      features: ['Process Assessment', 'Strategy Development', 'Best Practices', 'Change Management']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance existing systems with our optimization tools and methodologies.',
      features: ['System Tuning', 'Bottleneck Analysis', 'Speed Enhancement', 'Efficiency Metrics']
    },
    {
      icon: Shield,
      title: 'Support & Maintenance',
      description: '24/7 technical support and regular system updates to ensure optimal performance.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Performance Tuning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive PPF software solutions that drive efficiency, reduce costs, 
            and optimize your production processes from planning to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;