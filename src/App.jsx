import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/Trust-bar'
import Service from './components/Service'
import AboutUs from './components/About'
import Project from './components/Project'

function App() {
  return (
    <div className="w-full" id="home">
      <Navbar />
      <Hero />
      <TrustBar />
      <Service />
      <AboutUs />
      <Project />
    </div>
  )
}

export default App