import Navbar from "./components/Navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skill/skills";
import Works from "./components/Work/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
