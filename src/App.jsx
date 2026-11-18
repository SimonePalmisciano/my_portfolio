import { useEffect, useState } from "react";
import Header from "./partials/Header.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Passions from "./sections/Passions.jsx";
import Contact from "./sections/Contact.jsx";



function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme]);

  function onThemeToggle() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
    <Header theme={theme} onThemeToggle={onThemeToggle} />

    <main>

      <About />
      <Skills />
      <Projects />
      <Passions />
      <Contact />

    </main>
    </>
  )
}
export default App;
