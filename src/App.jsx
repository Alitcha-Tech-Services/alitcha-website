import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/features/Header.jsx';
import Footer from './components/features/Footer.jsx';
import './styles/global.css';
import './styles/variable.css';
import Home from './pages/Home/Home.jsx';
import SolutionPage from './pages/SolutionPage/SolutionPage';
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog';
import Event from './pages/Events/Event';
import Devis from './pages/Devis/Devis';
import Intranet from './pages/Intranet/Intranet';
import DetailArticle from './components/features/DetailArticle.jsx'
import RejoindreAlitchaPage from './pages/RejoindreAlitchaPage/RejoindreAlitchaPage.jsx';

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Solution" element={<SolutionPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Events" element={<Event />} />
      <Route path="/Detail-Article" element={<DetailArticle />} />
      <Route path="/Devis" element={<Devis />} />
      <Route path="/Intranet" element={<Intranet />} />
      <Route path="/joindre" element={<RejoindreAlitchaPage /> } />
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
    
    <Footer />
  </Router>
);

export default App;
