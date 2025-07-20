import React from 'react';
import { Award, Clock, Globe, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '5+' },
    { icon: Target, label: 'Client Satisfaction', value: '100%' },
    { icon: Clock, label: 'Average Implementation Time', value: '6 weeks' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Software Innovation
              <span className="block text-blue-600">Circle</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of experienced software engineers, data scientists, and production 
              planning experts dedicated to revolutionizing how businesses approach production 
              planning and forecasting.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our cutting-edge solutions combine advanced analytics, machine learning, and 
              intuitive design to deliver software that not only meets current needs but 
              adapts and scales with your business growth.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Custom Software Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">Seamless Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
              alt="Team working on software development"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;