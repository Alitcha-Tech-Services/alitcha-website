import reflexionImage from '../../assets/images/svg/reflexion.svg'
import '../../styles/features/reflexionSection.css'
import PaginateIcons from '../commons/PaginateIcons'
import { FaDownload, FaRegStar } from 'react-icons/fa'

export default function ReflexionSection() {

    return (
        <>
            <div id="reflexion-section" className='mt-5 d-flex flex-wrap justify-content-around align-items-center p-3'>
                <div>
                    <img src={reflexionImage} alt="Image de reflexion" />
                </div>
                <div className='reflexion-container'>
                    <h3 className='text-color-primary'>
                    Réflexion sur l’avenir de l’intelligence artificielle
                    </h3>
                    <div className='text-justify'>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    <div className='w-100 d-flex flex-row-reverse'>
                        <span>
                            <FaRegStar className='d-inline-block m-2 text-color-primary' size={20}/> 
                            <FaDownload className='d-inline-block m-2 text-color-primary' size={20}/>
                        </span>
                    </div>
                </div>
                </div>
            </div>
            <PaginateIcons />
        </>
    )
}