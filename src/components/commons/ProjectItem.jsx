/* eslint-disable react/prop-types */

import  '../../styles/commons/projectItem.css';
export default function ProjectItem({title, description}) {

    return (
        <>
            <div className='d-flex flex-column justify-content-around p-4 text-justify projet-item'>
                <h2>
                    {title}
                </h2>
                <div>
                    {description}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi architecto quis modi perferendis a nam consequuntur deserunt, obcaecati repudiandae nemo praesentium? Quos facilis cum et molestiae nam minus quisquam?
                </div>
            </div>
        </>
    )
}
ProjectItem.prototype = {
    title : String,
    description : String
}
