import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
//import cat_research_project from '../../assets/CatResearchProject.jpeg';

/* eslint-disable react/prop-types */

function SolutionDetailComponent({iIndex, image, title, description }) {
    return (
        <div id="SolutionDetailComponent" className="d-flex flex-row justify-content-center mx-2 my-5 SolutionDetailComponentClass">
            <div className="h-auto">
                <div>
                    <img src={image} alt="cat-research-project" className="w-100" style={{ 'border-top-left-radius': '10px','border-top-right-radius': '10px', 'minHeight': '290px' }} />
                </div>
                <div className="bg-white p-3 w-100" style={{ 'border-bottom-left-radius': '10px','border-bottom-right-radius': '10px', }}>
                    <h3 className="text-start text-color-primary">{title}</h3>
                    <p className="text-black text-justify">{description}</p>
                    <NavLink to={`/Home/solution/${iIndex}/detail`}>
                        <div className="text-color-primary text-start d-flex flex-row" style={{ width: '130px' }}>
                            <p>Voir plus</p>
                            <p><GoArrowRight className="text-color-primary" /></p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default SolutionDetailComponent;
