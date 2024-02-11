import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Facilities from './components/Facilities/Facilities';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Facilities/>
    </>
  );
}

export default App;
