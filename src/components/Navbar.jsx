import { Menu, X } from 'lucide-react';
import React from 'react';
import Logo from "/public/images/WhatsApp Image 2025-03-20 at 15.57.56_a0f98db0.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[100] focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled
    ? 'md:bg-gray-900/80 md:backdrop-blur-xl md:shadow-lg bg-transparent'
    : 'bg-transparent'
}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#home" aria-label="Home" className="relative z-50">
              <img
                src={Logo}
                alt="Construction Company Logo"
                className="w-28 h-auto rounded-2xl hover:scale-105 transition-transform"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-2 backdrop-blur-xl bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-lg"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-full transition-all font-medium ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-white hover:bg-white/10 hover:text-blue-200'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <a
              href="/get-quote"
              className="hidden md:block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Quote
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-blue-600 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20 hover:bg-white/20 transition"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200">
              <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const sectionId = link.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg transition font-medium text-lg ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.name}
                    </a>
                  );
                })}

                <a
                  href="/get-quote"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center shadow-lg"
                >
                  Get Quote
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
