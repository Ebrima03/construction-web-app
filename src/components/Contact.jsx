import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+220 301 7688"],
      subtext: "Mon-Fri 8AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["Muhammedsarjo@gmail.com"],
      subtext: "24/7 Online Support"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Manjai Kunda", "Serrekunda West, Banjul -The Gambia"],
      subtext: "Main Office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM"],
      subtext: "Sunday Closed"
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Linkedin, url: "#", label: "LinkedIn" }
  ];

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-4">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us today. We're ready to bring your construction vision to life.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-700 text-sm mb-1">
                  {detail}
                </p>
              ))}
              <p className="text-xs text-gray-500 mt-2">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                  placeholder="Enter your fullName"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    placeholder="+220 000 0000"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="residential">Residential Project</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="renovation">Renovation Project</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-lg h-80 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Visit Our Office</h4>
                <p className="text-blue-100 mb-4">Manjai Kunda

Serrekunda West, Banjul -The Gambia</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Why Contact Us?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Free project consultation and estimate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Response within 24 hours guaranteed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Expert advice from licensed professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition transform hover:scale-110 shadow-md"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Emergency Construction Services</h3>
          <p className="text-red-100 mb-4">Available 24/7 for urgent repairs and emergencies</p>
          <a
            href="tel:+2201234567"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Emergency Line: +220 301 7688
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;