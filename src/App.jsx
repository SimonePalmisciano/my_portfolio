import Header from "./partials/Header.jsx";
import Footer from "./partials/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Journey from "./sections/Journey.jsx";
import Contact from "./sections/Contact.jsx";



function App() {
  return (
    <>
    <Header />

    <main>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />

    </main>

    <Footer />
    </>
  )
}
export default App;
