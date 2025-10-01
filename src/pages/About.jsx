import React from "react";
import './About.css';
import historyImg from '../components/images/history.webp'; // Your image path

function About() {
  return (
    <div className="about-page px-6 py-12 bg-gray-50 min-h-screen">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          AquaFlow Water Company has been delivering safe and sustainable water solutions since <strong>2013</strong>. 
          Over the past decade, we have grown into a trusted provider for households and businesses, committed to purity, innovation, and community support.
        </p>
      </div>

      {/* Two-column layout: Image left, content right */}
      <div className="history-section flex flex-col md:flex-row items-start gap-8">
        
        {/* Left: Image */}
        <div className="history-image flex-shrink-0 md:w-1/2">
          <img 
            src={historyImg} 
            alt="Company History" 
            className="w-full h-auto object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
        </div>

        {/* Right: Content */}
        <div className="history-text md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Our Journey</h3>
          <p className="text-gray-700 mb-4">
            Started in 2013, AquaFlow began as a small local water delivery service in Lagos. With a focus on quality and reliability, we expanded steadily to serve communities across Nigeria. Today, we provide residential, commercial, and industrial water solutions, always keeping sustainability and customer satisfaction at the forefront.
          </p>
          <p className="text-gray-700 mb-6">
            Our history reflects our commitment: from humble beginnings to becoming a leading name in clean water solutions.
          </p>

          {/* Mission */}
          <div className="mission-section mb-6 bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h4>
            <p className="text-gray-700">
              To provide high-quality water services that improve health, support communities, 
              and protect the environment through innovative and eco-friendly solutions.
            </p>
          </div>

          {/* Values */}
          <div className="values-section bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Our Values</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>💧 Purity & Safety</li>
              <li>🌍 Environmental Sustainability</li>
              <li>🤝 Customer-Centered Service</li>
              <li>💡 Innovation & Excellence</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
