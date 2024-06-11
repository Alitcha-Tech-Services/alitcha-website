import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../styles/features/projectSession.css';
import ProjectItem from "../commons/ProjectItem";
import { GoArrowRight } from "react-icons/go";


export default function ProjectSession() {

    return (
        <div>
            <div id='projet-section'  className="d-flex flex-column justify-content-around align-items-center m-auto">
                <h2 className='mb-5 text-color-primary'>Nos Projets & Solutions</h2>
                <div id='project-container' className='my- d-flex flex-row justify-content-center align-items-center flex-wrap w-100'>
                    <ProjectItem title = "Onaa Project" />
                    <ProjectItem title = "Website Project" />
                    <ProjectItem  title = "Intranet Project"/> 
                </div>
                <div className='flex-end justify-content-end d-flex' style={{ width: "85%", 'margin-top': '-3px' }}>
                    <Button as={NavLink} to="/Solution" className='bg-black d-flex flex-row' style={{ width: "150px", border: 'none' }}><span style={{ color: '#aaa' }}>Voir plus </span><span className=''> <GoArrowRight /></span></Button>
                </div>
            </div>
        </div>
    )
}