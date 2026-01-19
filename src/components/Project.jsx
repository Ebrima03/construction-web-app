import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, CheckCircle } from 'lucide-react';


const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Renovation'];

  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      category: "Residential",
      location: "Los Angeles, CA",
      date: "2024",
      description: "Custom 4-bedroom home with smart technology and sustainable features.",
      status: "Completed",
      image: "/images/grid 2.jpg"
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      category: "Commercial",
      location: "New York, NY",
      date: "2023",
      description: "15-story commercial building with modern amenities.",
      status: "Completed",
      image: "/images/grid 2.jpg"
    },
    {
      id: 3,
      title: "Historic Building Restoration",
      category: "Renovation",
      location: "Boston, MA",
      date: "2024",
      description: "Complete restoration of 1920s landmark building.",
      status: "Completed",
      image: "/images/IMG-20250422-WA0017.jpg"
    },
    {
      id: 4,
      title: "Luxury Apartment Complex",
      category: "Residential",
      location: "Miami, FL",
      date: "2023",
      description: "50-unit luxury apartments with ocean views.",
      status: "Completed",
      image: "/images/grid 7.jpg"
    },
    {
      id: 5,
      title: "Shopping Center Renovation",
      category: "Renovation",
      location: "Chicago, IL",
      date: "2024",
      description: "Modern upgrade of existing retail space.",
      status: "Completed",
      image: "/images/init 5.jpg"
    },
    {
      id: 6,
      title: "Tech Campus Expansion",
      category: "Commercial",
      location: "San Francisco, CA",
      date: "2023",
      description: "New wing for growing tech company headquarters.",
      status: "Completed",
      image: "/images/grid 1.jpg"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-4">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building Dreams Into Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects. Quality work that stands the test of time.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="h-64 relative overflow-hidden">
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className={`w-full h-full ${project.bgClass}`} />
  )}

  {/* overlay */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>

  {/* status badge */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 inline-flex items-center text-white">
      <CheckCircle className="w-5 h-5 mr-2" />
      <span className="font-semibold">{project.status}</span>
    </div>
  </div>
</div>


              {/* Project Details */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Location & Date */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* View Details Link */}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">200+</p>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss your vision. Our team is ready to turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-quote"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;