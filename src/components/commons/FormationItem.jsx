/* eslint-disable react/prop-types */
import '../../styles/commons/atelier.css'
import Button from './Button'

export default function FormationItem({image}){

    return (
        <>
            <div id="atelier-item" className='m-1'>
                <div>
                    <img src={image} alt="" className="image-fluid"/>
                </div>
                <div>
                    <Button text="S'inscrire" className="btn text-white w-100 button-hover border"/>
                </div>
            </div>
        </>
    )
}