// import React from 'react';

import Newsletter from "./../../components/features/Newsletter";
import JoinAlitchaButton from './../../components/commons/JoinAlitchaButton';
import DerniereAnnonce from "../../components/features/DerniereAnnonce";
import ReflexionSection from "../../components/features/ReflexionSection";
import ArticlesComponent from "../../components/features/ArticlesComponent";
import TitleTypeWriter from "./../../components/features/TitleTypeWriter";
import ArticleItem from "../../components/features/ArticleItem";
import ArticleEnAvant from "../../components/features/ArticlesEnAvant";

function Blog() {

    const text = "dolor sit amet, consectetur adipiscing elit.";

    return (
        <div>
            <div className='d-flex justify-content-between aboutDetailTitle'>
                <h1 className="text-start mb-2 repeating-animation">
                    Forem ipsum <TitleTypeWriter text={text} delay={100} infinite />
                </h1>
                <p className='text-end'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu </p>
            </div>
            
            <div>
                <DerniereAnnonce />
            </div>
            <div className="mt-5">
                Composant filtre...
            </div>
            <div>
                <ArticleEnAvant />
            </div>
            <div>
                
            </div>
            <div>
                <Newsletter />
            </div>
        </div>
    );
}

export default Blog;
