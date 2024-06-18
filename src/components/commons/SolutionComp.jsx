
/* eslint-disable react/prop-types */

//import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

function SolutionComp({ catName, nbrProject, image, iIndex}) {
    return (
        <div id="SolutionComp" className='d-flex justify-content-center'>
            
                <div className="SolutionCompContainer">
                <Link to={`/Home/solution/${iIndex}`} style={{ textDecoration: 'none', color: 'currentcolor' }}>
                    <div className="SolutionCompFirstContent">
                        <img src={image} alt="SolutionCompImage" style={{ 'border-radius': '10px' }} />
                    </div>
                    <div className='SolutionCompSecondContent d-flex flex-row py-3 px-1 w-auto mt-2' style={{ border: '1px solid var(--color-primary)', 'border-radius': '5px', 'font-size': '15px' }}>
                        <span>{catName}</span>
                        <span className='none-display-span'>{(nbrProject == "")? nbrProject: nbrProject + " Projects"}</span>
                    </div>
                    </Link>
                </div>
            
        </div>
    );
}

export default SolutionComp;