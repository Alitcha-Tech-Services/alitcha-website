import image1 from '../../assets/images/svg/image1.svg'
import image2 from '../../assets/images/svg/image2.svg'
import image3 from '../../assets/images/svg/image3.svg'
import AtelierItem from '../commons/AtelierItem'
import '../../styles/features/atelierSection.css'
import PaginateIcons from '../commons/PaginateIcons'


export default function AtelierSection(){

    const donne = [
        {
            title: "Atelier sur la 3D",
            image: image1,
            like: 18
        },
        {
            title: "Atelier sur l'IA",
            image: image2,
            like: 7
        },
        {
            title: "Atelier sur l'innovation",
            image: image3,
            like: 14
        },
        {
            title: "Atelier sur la 3D",
            image: image1,
            like: 21
        },

    ]
    
    return (
        <>
            <div id='atelier-section'>
                <h3 className='my-5'>Ateliers</h3>
                <div className='d-flex flex-wrap align-items-center w-100 m-auto'>
                    {
                        donne.map((value, index) => {
                            return (
                                <AtelierItem key={index} title={value.title} like={value.like} image={value.image}/>
                            )
                        })
                    }
                    
                    
                </div>
                <PaginateIcons />
            </div>
        </>
    )
}