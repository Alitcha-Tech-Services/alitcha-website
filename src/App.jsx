//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/features/footer'; // Importation du composant Footer
import ResponsiveNav from './components/features/header';
import AskDevis from './components/features/askDevis';
import IntranetConnect from './components/features/intranetConnect';
import DetailArticle from './components/features/detailArticle';
import OurHistory from './components/features/OurHistory';

const App = () => (
  <div>
    <ResponsiveNav />
    <AskDevis />
    <OurHistory />
    <IntranetConnect />
    <DetailArticle />
    <Footer />
  </div>
);

export default App
