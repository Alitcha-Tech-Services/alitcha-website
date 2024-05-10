import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/features/Header';
import Footer from './components/features/Footer';
import './styles/global.css';
import './styles/variable.css';
// import Home from './pages/Home/Home.jsx';
// import Solution from './pages/Solution/Solution';
import About from './pages/About/About.jsx';
// import Blog from './pages/Blog/Blog';
// import Events from './pages/Events/Events';
import Devis from './pages/Devis/Devis';
import Intranet from './pages/Intranet/Intranet';

const App = () => (
  <Router>
    <Header />

    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/Home" element={<Home />} /> */}
      {/* <Route path="/Solution" element={<Solution />} /> */}
      <Route path="/About" element={<About />} />
      {/* <Route path="/Blog" element={<Blog />} /> */}
      {/* <Route path="/Events" element={<Events />} /> */}
      <Route path="/Devis" element={<Devis />} />
      <Route path="/Intranet" element={<Intranet />} />
      {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
    </Routes>
    
    <Footer />
  </Router>
);

export default App;