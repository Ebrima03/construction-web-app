import React, { useState } from 'react';
import { Home, Building2, Hammer, PaintBucket, Wrench, Ruler } from 'lucide-react';

const Service = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions tailored to your lifestyle and budget.",
      features: [
        "Custom Home Building",
        "Kitchen & Bath Remodels",
        "Home Additions",
        "Basement Finishing",
        "Garage Construction",
        "Deck & Patio Installation",
        "Energy-Efficient Upgrades",
        "Smart Home Integration"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Professional construction solutions for offices, retail spaces, and industrial facilities.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Restaurant Build-Outs",
        "Medical Facilities",
        "Educational Buildings",
        "Multi-Unit Complexes",
        "Parking Structures"
      ]
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with expert renovation and modernization services.",
      features: [
        "Interior Renovations",
        "Exterior Upgrades",
        "Historic Restoration",
        "Accessibility Modifications",
        "Room Conversions",
        "Open Floor Plan Redesign",
        "Window & Door Replacement",
        "Structural Modifications"
      ]
    },
    {
      icon: PaintBucket,
      title: "Interior Finishing",
      description: "Premium finishes and attention to detail that bring your vision to life.",
      features: [
        "Custom Carpentry",
        "Flooring Installation",
        "Painting & Drywall",
        "Tile & Stonework",
        "Crown Molding & Trim",
        "Built-In Cabinetry",
        "Lighting Fixtures",
        "Backsplash Installation"
      ]
    },
    {
      icon: Wrench,
      title: "Repairs & Maintenance",
      description: "Reliable repair services to keep your property in top condition year-round.",
      features: [
        "Emergency Repairs",
        "Structural Repairs",
        "Preventive Maintenance",
        "Weather Damage Restoration",
        "Foundation Repair",
        "Roof Repair & Replacement",
        "Plumbing & Electrical Fixes",
        "HVAC System Maintenance"
      ]
    },
    {
      icon: Ruler,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring on-time, on-budget delivery.",
      features: [
        "Budget Planning",
        "Timeline Management",
        "Quality Control",
        "Vendor Coordination",
        "Permit Processing",
        "Site Supervision",
        "Material Procurement",
        "Progress Reporting"
      ]
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  const toggleFeatures = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer a full range of construction services 
            to meet every need with precision and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => {
            const isExpanded = expandedCards[index];
            const displayedFeatures = isExpanded ? service.features : service.features.slice(0, 4);
            
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {displayedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View More/Less Button for Features */}
                {service.features.length > 4 && (
                  <button
                    onClick={() => toggleFeatures(index)}
                    className="text-blue-600 text-sm font-semibold hover:text-blue-700 mb-4"
                  >
                    {isExpanded ? 'View Less' : `View ${service.features.length - 4} More`}
                  </button>
                )}

                {/* Learn More Link */}
                {/* <a 
                  href="#" 
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {showAll ? 'Show Less Services' : 'View All Services'}
          </button>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why Choose Our Services?
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                We combine decades of experience with modern techniques and technology 
                to deliver exceptional results on every project, no matter the size or complexity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Licensed & insured professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Transparent pricing & detailed estimates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>On-time project completion</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Comprehensive warranty coverage</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">500+</p>
                <p className="text-blue-100 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-blue-100 text-sm">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-blue-100 text-sm">Client Satisfaction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="text-blue-100 text-sm">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can bring your construction project to life.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Request a Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;