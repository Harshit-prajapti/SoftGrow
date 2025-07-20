import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Growlence Sales Optimization',
      category: 'manufacturing',
      client: 'Global Auto Manufacturer',
      description: 'Implemented advanced sales optimization strategies to enhance revenue growth and customer engagement.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
      results: ['35% reduction in downtime', '94% forecast accuracy'],
      duration: '8 weeks',
      teamSize: '12 experts',
      link : 'https://growlens.vercel.app'
    },
    {
      id: 2,
      title: 'School Web',
      category: 'analytics',
      client: 'Logistics Corporation',
      description: 'Custom web application for school management and student engagement.',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg',
      results: ['Real-time visibility', '25% cost reduction', 'Predictive maintenance'],
      duration: '6 weeks',
      teamSize: '8 experts',
      link : 'https://school-eight-drab.vercel.app/'
    },
    // {
    //   id: 3,
    //   title: 'Food Industry Production System',
    //   category: 'food',
    //   client: 'Food Processing Company',
    //   description: 'Specialized PPF solution for perishable goods with temperature-sensitive planning algorithms.',
    //   image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
    //   results: ['30% waste reduction', 'Improved shelf life', 'Quality assurance'],
    //   duration: '10 weeks',
    //   teamSize: '15 experts'
    // },
    // {
    //   id: 4,
    //   title: 'Pharmaceutical Production Planning',
    //   category: 'pharmaceutical',
    //   client: 'BioPharma Inc.',
    //   description: 'Compliance-focused PPF system meeting FDA regulations with batch tracking and quality control.',
    //   image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg',
    //   results: ['100% compliance', 'Batch traceability', 'Quality control'],
    //   duration: '12 weeks',
    //   teamSize: '18 experts'
    // },
    // {
    //   id: 5,
    //   title: 'Textile Industry Optimization',
    //   category: 'manufacturing',
    //   client: 'Textile Manufacturer',
    //   description: 'Multi-facility production planning with demand forecasting and inventory optimization.',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    //   results: ['Multi-facility sync', '40% inventory reduction', 'Demand forecasting'],
    //   duration: '7 weeks',
    //   teamSize: '10 experts'
    // },
    // {
    //   id: 6,
    //   title: 'Energy Sector Analytics',
    //   category: 'analytics',
    //   client: 'Power Generation Company',
    //   description: 'Predictive analytics for power generation planning and maintenance scheduling.',
    //   image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    //   results: ['Predictive maintenance', '20% efficiency gain', 'Cost optimization'],
    //   duration: '9 weeks',
    //   teamSize: '14 experts'
    // }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'food', label: 'Food Industry' },
    { id: 'pharmaceutical', label: 'Pharmaceutical' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries optimize their 
            production planning and achieve remarkable results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">{project.client}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="space-y-2 mb-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                  <span>View Case Study</span>
                  <ExternalLink className="h-4 w-4" ><a href={project.link}></a></ExternalLink>
                  <a href={project.link}>Watch Live</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;