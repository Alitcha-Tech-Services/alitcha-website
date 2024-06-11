import image1 from '../../assets/images/svg/image1.svg'
import image2 from '../../assets/images/svg/image2.svg'
import image3 from '../../assets/images/svg/image3.svg'
import FormationItem from '../commons/FormationItem'
import PaginateIcons from '../commons/PaginateIcons'

export default function FormationSection() {


    const donne = [
        {
            image: image1,
        },
        {
            image: image2,
        },
        {
            image: image3,
        },
        {
            image: image1,
        }

    ]

    return (
        <div>
            <div className='mt-5 w-75 text-justify m-auto p-3 align-item-center justify-content-center'>
                <h3>Formations</h3>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus ullam! Distinctio quibusdam asperiores ad perferendis expedita ratione facilis voluptatum, dignissimos consequatur aut vitae rerum porro aperiam, dicta eum velit.</p>
                <div className='d-flex flex-wrap'>
                    {
                        donne.map((value, index) => {
                            return (
                                <FormationItem key={index} image={value.image}/>
                            )
                        })
                    }
                    
                </div>
                <div className='d-flex justify-content-center align-items-center w-100'>
                    <PaginateIcons />
                </div>
            </div>
        </div>
    )
}