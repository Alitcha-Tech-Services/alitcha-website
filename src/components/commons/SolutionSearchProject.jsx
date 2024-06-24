import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

/* eslint-disable react/prop-types */

function SolutionSearchProject({indexId, image, childTitle, parentTitle, text}) {
    return (
        <div className="d-flex flex-row justify-content-center w-auto mx-4 my-5">
            <div className="w-auto">
                <div>
                    <img src={image} alt="cat-research-project" className="" style={{ 'border-top-left-radius': '10px', 'border-top-right-radius': '10px', 'max-width': '400px', 'max-height': '455px', 'min-width': '280px', 'min-height': '350px' }} />
                </div>
                <div className="bg-white p-3" style={{ 'border-bottom-right-radius': '10px', 'border-bottom-left-radius': '10px', 'max-width': '400px', 'min-width': '280px' }}>
                    <h3 className="text-start text-color-primary">{parentTitle} : {childTitle}</h3>
                    <p className="text-black text-justify">{text}</p>
                    <NavLink to={`/home/solution/${indexId}/detail`}>
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

export default SolutionSearchProject;
