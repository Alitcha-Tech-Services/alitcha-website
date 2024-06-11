
import '../../styles/features/researchProjectSection.css'
import PaginateIcons from '../commons/PaginateIcons'
export default function ResearchProject(){

    return (
        <div>
            <div id="research-project-section" className="d-flex flex-column m-auto my-5">
                <h5 className="my-3">
                    Les Projets de Recherche
                </h5>
                <div className="text-justify my-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo recusandae debitis cum, sint nisi laboriosam veritatis ut aspernatur porro facilis dolorem pariatur non vitae fugit incidunt minima consequatur minus.
                    Ea voluptas dolorem architecto blanditiis, nulla consequatur facilis dolores quo fuga tempore cupiditate. Ipsum repellendus quos doloribus id eius est quisquam ullam alias nobis error beatae omnis, veritatis quod nam.
                    Repellat fuga perspiciatis similique blanditiis esse possimus accusamus placeat vitae numquam doloremque necessitatibus delectus porro officiis assumenda alias dignissimos libero quia consequatur odit beatae laborum est, nulla quis reprehenderit. Similique?
                    <div className='d-flex justify-content-center align-items-center flex-row'>
                        <PaginateIcons />   
                    </div>
                </div>
            </div>
        </div>
    )
}