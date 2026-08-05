import  Hero  from "./sections/Hero";
import Navbar from "./layout/Navbar"
import Experience  from "./sections/Experience";
import Projects from "./sections/Projects";
import  About  from "./sections/About";
import  Testimonials  from "./sections/Testimonials";
import Contact  from "./sections/Contact";
import Footer from "./layout/Footer"


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      < Testimonials />
      <Contact />
      <Footer />
      <main>

      </main>
    </div>
  );
}

export default App;