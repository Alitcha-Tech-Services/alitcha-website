import { useState } from 'react';
import JoinAlitchaButton from "../../components/commons/JoinAlitchaButton";
import Newsletter from "../../components/features/Newsletter";
import SolutionDetailComponent from "../../components/features/SolutionDetailComponent";
import cat_research_project from '../../assets/CatResearchProject.jpeg';
import './HomeSolution.css';


function HomeSolutionsMore() {

    const [showMore, setShowMore] = useState(false); // 1. Créer un état pour gérer la visibilité

    const handleShowMoreClick = () => {
        setShowMore(true); // 3. Gestionnaire pour mettre à jour l'état
    };

    const HomeSolutionInfos=[
        {iIndex: 1, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 2, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 3, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 4, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 5, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 6, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 7, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 8, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 9, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 10, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
        {iIndex: 11, image: cat_research_project, title: "Lorem ipsum reiklppook", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."},
    ];
    return (
        <div>
            <div>
                <h3 className="text-center text-color-primary mt-5 mb-5">Les Solutions de Cat IA</h3>
                <div className="d-flex justify-content-center">
                    <div className="w-75" >
                        {
                            !showMore && (
                                <div className="home-solutions-more-first-content-div mb-5">
                                    {
                                        HomeSolutionInfos.slice(0, 6).map((value, index)=>(
                                            <SolutionDetailComponent key={index} iIndex={value.iIndex} image={value.image} title={value.title} description={value.description} />
                                        ))
                                    }
                                </div>
                            )
                        }
                        {
                            !showMore && (
                                <div className='mt-5 mb-5'>
                                    <button type="button" className="w-auto text-color-primary text-center bg-black border-border-primary button-hover" onClick={handleShowMoreClick}>afficher plus</button>
                                </div>
                            )
                        }
                        {
                            showMore && (
                                <div className="home-solutions-more-last-content-div">
                                    {
                                        HomeSolutionInfos.map((value, index) => (
                                        <SolutionDetailComponent key={index} iIndex={value.iIndex} image={value.image} title={value.title} description={value.description} />
                                    ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="mt-5 pt-4">
                    <JoinAlitchaButton />
                </div>
                <div>
                    <Newsletter />
                </div>
            </div>
        </div>
    );
}

export default HomeSolutionsMore;
