import '../../styles/features/projectSession.css'
import ProjectItem from "../commons/ProjectItem";


export default function ProjectSession() {

    return (
        <>
            <div id='projet-section'  className="d-flex flex-column justify-content-around align-items-center m-auto">
                <h2>Nos Projets</h2>
                <div id='project-container' className='my- d-flex flex-row justify-content-center align-items-center flex-wrap w-100'>
                    <ProjectItem title = "Onaa Project" />
                    <ProjectItem title = "Website Project" />
                    <ProjectItem  title = "Intranet Project"/> 
                </div>
            </div>
        </>
    )
}