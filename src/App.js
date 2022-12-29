import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import University from "./components/University";
import College from "./components/College";
import School from "./components/School";
import City from "./components/City";
import Village from "./components/Village";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {['home', ''].map(path => <Route path={path} element={<Home />} />)}
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/university' element={<University />} />
          <Route path='/college' element={<College />} />
          <Route path='/school' element={<School />} />
          <Route path='/city' element={<City />} />
          <Route path='/village' element={<Village />} />
        </Routes>
        <SocialLinks />

      </BrowserRouter>
    </div>
  );
}

export default App;
