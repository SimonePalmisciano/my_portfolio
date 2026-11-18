import Header from "./partials/Header.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Passions from "./sections/Passions.jsx";
import Contact from "./sections/Contact.jsx";



function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-12 col-md-9 min-vh-100 py-4 pt-5 pt-md-4 mt-2 mt-md-0">
          <About />
          <Skills />
          <Projects />
          <Passions />
          <Contact />
        </main>

        <Header />
      </div>
    </div>
  )
}
export default App;
