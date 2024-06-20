import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import cat_research_project from '../../assets/CatResearchProject.jpeg';


function CatResearchProject() {
    return (
        <div className="d-flex flex-row justify-content-center w-auto my-5">
            <div className="w-auto">
                <div className="d-flex justify-content-center">
                    <div className="background-primary d-flex flex-row justify-content-evenly" style={{ 'max-width': '450px', 'max-height': '85px', 'min-width': '250px', 'min-height': '75px', 'z-index': '100', 'margin-bottom': '-37px', 'border-radius': '8px' }}>
                        <div className="mt-2">
                            <h2>10</h2>
                            <p>projets</p>
                        </div>
                        <div className="d-flex flex-row justify-content-center" style={{ width: '20px' }}>
                            <span className="bg-white mt-2" style={{ width: '2px', height: '65px' }}></span>
                        </div>
                        <div className="mt-2">
                            <p className="mt-2">Cat : </p>
                            <p>intelligence artificiel</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={cat_research_project} alt="cat-research-project" className="" style={{ 'border-top-left-radius': '10px', 'border-top-right-radius': '10px', 'max-width': '550px', 'max-height': '355px', 'min-width': '280px', 'min-height': '290px' }} />
                </div>
                <div className="bg-white p-3" style={{ 'border-bottom-right-radius': '10px', 'border-bottom-left-radius': '10px', 'max-width': '550px', 'min-width': '280px' }}>
                    <h3 className="text-start text-color-primary">Lorem ipsum reiklppook</h3>
                    <p className="text-black text-justify">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                    {/* <NavLink to={path}>{anchorText} <GoArrowRight className="mx-2 text-color-primary" /></NavLink> */}
                    <NavLink to="/home/solution/1/detail">
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

export default CatResearchProject;
