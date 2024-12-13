
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from './Home/Home'
import About from './About/About';
import Services from './Services/Services';
import ContactForm from './Contact/Contact';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
      <div>

        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/About" element={<About />} /> 
            <Route path="/Services" element={<Services />} /> 
            <Route path="/contact" element={<ContactForm />} /> 
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
