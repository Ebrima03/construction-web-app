import { Menu, X } from 'lucide-react';
import React from 'react';

// Import your images
import Logo from "/public/images/WhatsApp Image 2025-03-20 at 15.57.56_a0f98db0.jpg"


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="relative z-50">
            <img src={Logo} alt="Construction Company Logo" className='w-28 h-auto rounded-2xl' />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 backdrop-blur-lg bg-white/10 px-8 py-3 rounded-full border border-white/20 shadow-lg">
            <a href="#home" className="text-white hover:text-blue-200 transition font-medium">Home</a>
            <a href="#services" className="text-white hover:text-blue-200 transition font-medium">Services</a>
            <a href="#projects" className="text-white hover:text-blue-200 transition font-medium">Projects</a>
            <a href="#about" className="text-white hover:text-blue-200 transition font-medium">About</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <a
            href="/get-quote"
            className="hidden md:block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-800 hover:text-blue-600 transition font-medium text-lg">Home</a>
              <a href="/services" className="text-gray-800 hover:text-blue-600 transition font-medium text-lg">Services</a>
              <a href="/projects" className="text-gray-800 hover:text-blue-600 transition font-medium text-lg">Projects</a>
              <a href="/about" className="text-gray-800 hover:text-blue-600 transition font-medium text-lg">About</a>
              <a href="/contact" className="text-gray-800 hover:text-blue-600 transition font-medium text-lg">Contact</a>
              <a
                href="/get-quote"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;