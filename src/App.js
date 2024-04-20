import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./styles/styles.css"
import Portfolio from "./components/Portfolio";

function App() {
  return (
      <Router>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
