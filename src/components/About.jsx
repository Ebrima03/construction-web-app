import React from 'react';
import { Award, Shield, Users, Target } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering superior craftsmanship in every project we undertake."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through honest communication and transparent business practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to turn their vision into reality."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail from planning through final execution."
    }
  ];

  const milestones = [
    { year: "1985", title: "Founded", description: "Started as a family business" },
    { year: "2000", title: "Expansion", description: "Grew to commercial projects" },
    { year: "2015", title: "Innovation", description: "Adopted green building practices" },
    { year: "2024", title: "Excellence", description: "500+ projects completed" }
  ];

  return (
    <section className="py-20 bg-white" id='about'>
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-4">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building Excellence Since 1985
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted construction partner for nearly four decades. Quality you can count on.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          
          {/* Left - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              We started small with big dreams. Today, we're a trusted name in construction.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our team combines old-school craftsmanship with modern techniques. Every project gets our full attention.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Quality and safety come first. We build more than structures—we build trust.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">40+</p>
                <p className="text-gray-600 text-sm mt-1">Years</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600 text-sm mt-1">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">200+</p>
                <p className="text-gray-600 text-sm mt-1">Clients</p>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl h-[500px] flex items-center justify-center shadow-2xl">
              <div className="text-center text-white p-8">
                <Award className="w-20 h-20 mx-auto mb-6" />
                <p className="text-3xl font-bold mb-2">Award-Winning</p>
                <p className="text-blue-100 text-lg">Excellence in Construction</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-gray-600 text-sm">Licensed & Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors shadow-lg">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg relative z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    {milestone.year}
                  </p>
                  <p className="text-lg font-bold text-gray-900 mb-1">
                    {milestone.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {milestone.description}
                  </p>
                </div>
                
                {/* Connecting line (except for last item) */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-300 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's build something great together. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;