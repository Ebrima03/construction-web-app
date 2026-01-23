import React from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Home, Building } from 'lucide-react';

const Project = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [activeView, setActiveView] = React.useState('Exterior'); // Exterior or Interior
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(false);
  const [lightboxImages, setLightboxImages] = React.useState([]); // Track which images are in lightbox
  const featuredScrollRef = React.useRef(null);

  const filters = ['All', 'Residential', 'Commercial', 'Renovation'];
  const viewTypes = ['Exterior', 'Interior'];

  // Featured/Recently Completed Projects
  const featuredProjects = [
    {
      id: 'f1',
      title: "Luxury Beachfront Villa",
      category: "Residential",
      location: "Kololi",
      completedDate: "January 2026",
      images: [
        { src: "/images/grid-2.jpg", type: "Exterior" },
        { src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (6).jpeg", type: "Interior" },
        { src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (7).jpeg", type: "Interior" },
      ],
      description: "Stunning 5-bedroom beachfront villa with infinity pool and modern amenities.",
      highlights: ["Ocean views", "Infinity pool", "Smart home system", "Solar panels"]
    },
    {
      id: 'f2',
      title: "Corporate Innovation Hub",
      category: "Commercial",
      location: "Serrekunda",
      completedDate: "December 2025",
      images: [
        { src: "/images/WhatsApp Image 2026-01-19 at 16.00.15 (1).jpeg", type: "Exterior" },
        { src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (1).jpeg", type: "Interior" },
        { src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (2).jpeg", type: "Interior" },
      ],
      description: "Modern tech hub with collaborative workspaces and conference facilities.",
      highlights: ["LEED certified", "Open floor plan", "Rooftop terrace", "EV charging"]
    },
    {
      id: 'f3',
      title: "Heritage Building Restoration",
      category: "Renovation",
      location: "Banjul",
      completedDate: "November 2025",
      images: [
        { src: "/images/grid-8.jpg", type: "Exterior" },
        { src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (4).jpeg", type: "Interior" },
      ],
      description: "Complete restoration of historic 1930s colonial building preserving original architecture.",
      highlights: ["Original features preserved", "Modern utilities", "Heritage certified", "Museum quality"]
    }
  ];

  // All images organized by type
  const allImages = [
    // Exterior Images
    { id: 1, src: "/images/grid-1.jpg", category: "Residential", type: "Exterior", title: "Modern Family Home", location: "Sukuta" },
    { id: 2, src: "/images/grid-2.jpg", category: "Commercial", type: "Exterior", title: "Downtown Office Complex", location: "Brikama" },
    { id: 3, src: "/images/grid-3 (2).jpg", category: "Renovation", type: "Exterior", title: "Historic Building Restoration", location: "Kanifing" },
    { id: 4, src: "/images/grid-8.jpg", category: "Residential", type: "Exterior", title: "Luxury Apartment Complex", location: "Bijilo" },
    { id: 5, src: "/images/grid-11.jpg", category: "Renovation", type: "Exterior", title: "Shopping Center", location: "Bakau" },
    { id: 6, src: "/images/grid-11.jpg", category: "Commercial", type: "Exterior", title: "Tech Campus", location: "Serrekunda" },
    { id: 7, src: "/images/gid-2.jpg", category: "Residential", type: "Exterior", title: "Coastal Villa", location: "Kololi" },
    { id: 8, src: "/images/grid-7.jpg", category: "Commercial", type: "Exterior", title: "Business Park", location: "Kotu" },
    { id: 9, src: "/images/WhatsApp Image 2026-01-19 at 16.00.15 (1).jpeg", category: "Residential", type: "Exterior", title: "Executive Townhouse", location: "Fajara" },
    { id: 10, src: "/images/WhatsApp Image 2026-01-19 at 16.04.24 (5).jpeg", category: "Commercial", type: "Exterior", title: "Corporate Headquarters", location: "Brikama" },
    
    // Interior Images
    { id: 11, src: "/images/init-5.jpg", category: "Residential", type: "Interior", title: "Modern Living Room", location: "Sukuta" },
    { id: 12, src: "/images/WhatsApp Image 2026-01-19 at 16.08.37.jpeg", category: "Commercial", type: "Interior", title: "Office Space", location: "Brikama" },
    { id: 13, src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (8).jpeg", category: "Renovation", type: "Interior", title: "Restored Interior", location: "Kanifing" },
    { id: 14, src: "/images/init-1.jpg", category: "Residential", type: "Interior", title: "Luxury Apartment Interior", location: "Bijilo" },
    { id: 15, src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (1).jpeg", category: "Renovation", type: "Interior", title: "Retail Interior", location: "Bakau" },
    { id: 16, src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (6).jpeg", category: "Commercial", type: "Interior", title: "Tech Office Interior", location: "Serrekunda" },
    { id: 17, src: "/images/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table.jpg", category: "Residential", type: "Interior", title: "Modern Kitchen", location: "Kololi" },
    { id: 18, src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (2).jpeg", category: "Commercial", type: "Interior", title: "Executive Office", location: "Kotu" },
    { id: 19, src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (3).jpeg", category: "Residential", type: "Interior", title: "Master Bedroom", location: "Fajara" },
    { id: 20, src: "/images/WhatsApp Image 2026-01-19 at 16.08.37 (4).jpeg", category: "Renovation", type: "Interior", title: "Renovated Dining Area", location: "Westfield" },
  ];

  const filteredImages = allImages
    .filter(img => activeFilter === 'All' || img.category === activeFilter)
    .filter(img => img.type === activeView);

  const openLightbox = (image, index, imagesArray = filteredImages) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxImages(imagesArray);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  // Handle body overflow
  React.useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % lightboxImages.length;
    setCurrentIndex(newIndex);
    setCurrentImage(lightboxImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? lightboxImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(lightboxImages[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentIndex]);

  // Auto-play
  React.useEffect(() => {
    let interval;
    if (lightboxOpen && isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % lightboxImages.length;
          setCurrentImage(lightboxImages[newIndex]);
          return newIndex;
        });
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [lightboxOpen, isAutoPlaying, lightboxImages]);

  // Auto-scroll featured projects
  React.useEffect(() => {
    const container = featuredScrollRef.current;
    if (!container) return;

    let scrollInterval;
    let isPaused = false;

    const autoScroll = () => {
      if (isPaused) return;
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 350, behavior: 'smooth' });
      }
    };

    const timeoutId = setTimeout(() => {
      scrollInterval = setInterval(autoScroll, 4000);
    }, 2000);

    const handleTouchStart = () => {
      isPaused = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isPaused = false;
      }, 5000);
    };

    const handleScroll = () => {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 3000);
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      if (scrollInterval) clearInterval(scrollInterval);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollFeaturedLeft = () => {
    if (featuredScrollRef.current) {
      featuredScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollFeaturedRight = () => {
    if (featuredScrollRef.current) {
      featuredScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="projects">
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
            Browse our exterior and interior photography separately.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Recently Completed Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-2 mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Recently Completed
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Latest Projects
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh from completion. See our most recent work delivered to satisfied clients.
            </p>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="relative">
            {/* Left Scroll Button - Hidden on mobile */}
            <button
              onClick={scrollFeaturedLeft}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Scroll Button - Hidden on mobile */}
            <button
              onClick={scrollFeaturedRight}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile swipe indicator */}
            <div className="md:hidden text-center mb-3">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Swipe to browse latest projects
                <ChevronRight className="w-4 h-4" />
              </p>
            </div>

            {/* Scrollable Projects */}
            <div
              ref={featuredScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-6 px-6 md:mx-0 md:px-0"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  {/* Main Image */}
                  <div 
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(project.images[0], 0, project.images)}
                  >
                    <img
                      src={project.images[0].src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* New Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      NEW
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-full text-white text-xs font-semibold">
                      {project.category}
                    </div>

                    {/* Completion Date */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-gray-800">
                      Completed: {project.completedDate}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                      📍 {project.location}, The Gambia
                    </p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Count */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        {project.images.length} photos available
                      </span>
                      <button
                        onClick={() => openLightbox(project.images[0], 0, project.images)}
                        className="text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1"
                      >
                        View Gallery
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 mb-12"></div>

        {/* Exterior/Interior Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl shadow-lg p-2 inline-flex gap-2">
            {viewTypes.map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeView === view
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {view === 'Exterior' ? (
                  <><Building className="w-5 h-5" /> Exterior Views</>
                ) : (
                  <><Home className="w-5 h-5" /> Interior Views</>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              {activeView === 'Exterior' ? (
                <><Building className="w-6 h-6 text-blue-600" /> Exterior Photography</>
              ) : (
                <><Home className="w-6 h-6 text-blue-600" /> Interior Photography</>
              )}
            </h3>
            <p className="text-gray-600">{filteredImages.length} photos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image, index)}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gray-200"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block bg-blue-600 px-2 py-1 rounded text-xs font-semibold mb-2">
                      {image.category}
                    </div>
                    <h3 className="font-bold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs text-gray-200">{image.location}</p>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoPlaying(!isAutoPlaying);
              }}
              className="absolute top-6 left-6 text-white hover:text-gray-300 transition z-50 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20"
            >
              {isAutoPlaying ? (
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Auto-play ON
                </span>
              ) : (
                <span>Auto-play OFF</span>
              )}
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-white hover:text-gray-300 transition z-50 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-white hover:text-gray-300 transition z-50 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Main Image Container */}
            <div 
              className="max-w-7xl max-h-[90vh] w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl animate-scaleIn"
                />
                
                {/* Image Type Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold flex items-center gap-2">
                  {currentImage.type === 'Exterior' ? (
                    <><Building className="w-5 h-5" /> Exterior</>
                  ) : (
                    <><Home className="w-5 h-5" /> Interior</>
                  )}
                </div>
              </div>
              
              {/* Image Info */}
              <div className="mt-6 text-center text-white animate-slideUp">
                <div className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {currentImage.category}
                </div>
                <h3 className="text-3xl font-bold mb-2">{currentImage.title}</h3>
                <p className="text-gray-300 text-lg mb-3">{currentImage.location}, The Gambia</p>
                <p className="text-sm text-gray-400">
                  Image {currentIndex + 1} of {lightboxImages.length} {currentImage.type || ''} photos • Use arrow keys to navigate
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mb-16 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-5xl font-bold mb-2">200+</p>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
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
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:-translate-y-1"
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