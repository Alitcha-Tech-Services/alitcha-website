import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/features/Header';
import Footer from './components/features/Footer';
import './styles/global.css';
import './styles/variable.css';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog';
import Event from './pages/Events/Event';
import Devis from './pages/Devis/Devis';
import Intranet from './pages/Intranet/Intranet';
import DetailArticle from './components/features/DetailArticle';
// import RejoindreAlitchaPage from './pages/RejoindreAlitchaPage/RejoindreAlitchaPage';
// import SolutionPage from './pages/SolutionPage/SolutionPage.jsx';
import JoinAlitcha from './pages/JoinAlitcha/JoinAlitcha.jsx';
import Solution from './pages/Solution/Solution.jsx';

import CatResearchProject from './components/features/CatResearchProject.jsx';
//import FilterComponents from './components/features/FilterComponents.jsx';
import HomeSolutionsMore from './pages/HomeSolutions/HomeSolutionMore.jsx';
import SolutionSearchProject from './components/commons/SolutionSearchProject.jsx';

const App = () => (
    <Router>
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Home/solution/*" element={<HomeSolutionsMore />} />
            <Route path={`/Home/solution/:iIndex/detail`} element={<DetailArticle />} />
            {/* <Route path="/Solution" element={<SolutionPage />} /> */}
            <Route path="/Solution" element={<Solution />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Events" element={<Event />} />
            <Route path="/Devis" element={<Devis />} />
            <Route path="/research-project" element={<CatResearchProject />} />
            {/* <Route path="/joindre" element={<RejoindreAlitchaPage /> } /> */}
            <Route path="/join" element={<JoinAlitcha /> } />
            <Route path="/filter" element={<SolutionSearchProject /> } />
            <Route path="/Intranet" element={<Intranet />} />
            <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
        
        <Footer />
    </Router>
);

export default App;
