import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/features/Header';
import Footer from './components/features/Footer';
import './styles/global.css';
import './styles/variable.css';
import Home from './pages/Home/Home.jsx';
//import Solution from './pages/Solution/Solution';
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog';
import Event from './pages/Events/Event';
import Devis from './pages/Devis/Devis';
import Intranet from './pages/Intranet/Intranet';
import DetailArticle from './components/features/DetailArticle';
import RejoindreAlitchaPage from './pages/RejoindreAlitchaPage/RejoindreAlitchaPage';
import SolutionPage from './pages/SolutionPage/SolutionPage.jsx';
import AlaUneSection from './components/features/AlaUneSection.jsx'
import EventSection from './components/features/EventSection.jsx'
import EventPresentation from './components/features/EventPresentation.jsx';

const App = () => (
  <Router>
    <Header />
    {/* <AlaUneSection />
    <EventSection /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Solution" element={<SolutionPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Events" element={<Event />} />
      <Route path="/Detail-Article" element={<DetailArticle />} />
      <Route path="/Devis" element={<Devis />} />
      <Route path="/joindre" element={<RejoindreAlitchaPage /> } />
      <Route path="/Intranet" element={<Intranet />} />
      <Route path="/EventPresentation/:id" element={<EventPresentation />} />
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
    
    <Footer />
  </Router>
);

export default App;
