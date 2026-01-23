import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/Trust-bar'
import Service from './components/Service'
import AboutUs from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full" id="home">
      <Navbar />
      <Hero />
      <TrustBar />
      <Service />
      <AboutUs />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App