import BgImage from "@/assets/images/illustration-construction-site.jpg"

const Hero = () => {
  const stats = [
    { id: 1, value: "15+", label: "Years Experience" },
    { id: 2, value: "500+", label: "Completed Projects" },
    { id: 3, value: "100%", label: "Quality Assurance" },
    { id: 4, value: "200+", label: "Happy Clients" },
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          {/* Replace with your image */}
          <img
            src={BgImage}
            alt="Construction site"
            className="w-full h-full object-cover bg-cover bg-center bg-no-repeat"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/70 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24">
        <div className="container mx-auto px-6 text-center py-20">

          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-white/90 text-sm font-medium">🏆 Award-Winning Construction Company</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building the Future,<br />
            <span className="text-blue-300">Restoring the Past</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming ideas into reality with trusted construction solutions 
            and unmatched craftsmanship.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="/get-quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get a Free Quote
            </a>

            <a
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition shadow-xl backdrop-blur-sm bg-white/5"
            >
              View Our Projects
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {stats.map((item, index) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all hover:transform hover:-translate-y-1 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {item.value}
                </p>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};
export default Hero;