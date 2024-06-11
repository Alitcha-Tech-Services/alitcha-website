import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import cat_research_project from '../../assets/CatResearchProject.jpeg';

/* eslint-disable react/prop-types */

function SolutionDetailComponent({iIndex}) {
  return (
    <div className="d-flex flex-row justify-content-center">
        <div className="w-auto">
            <div>
                <img src={cat_research_project} alt="cat-research-project" className="" style={{ 'border-top-left-radius': '10px', 'border-top-right-radius': '10px', 'max-width': '650px', 'max-height': '355px', 'min-width': '280px', 'min-height': '290px' }} />
            </div>
            <div className="bg-white p-3" style={{ 'border-bottom-right-radius': '10px', 'border-bottom-left-radius': '10px', 'max-width': '650px', 'min-width': '280px' }}>
                <h3 className="text-start text-color-primary">Lorem ipsum reiklppook</h3>
                <p className="text-black text-justify">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
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
