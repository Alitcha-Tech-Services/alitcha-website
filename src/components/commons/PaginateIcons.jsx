/* eslint-disable react/prop-types */
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa'
import '../../styles/commons/paginate.css'
// eslint-disable-next-line no-unused-vars
export default function PaginateIcons ({ actionLeft, actionRight}){



    return (
        <>
            <span className='icon-left' onClick={() => actionLeft()}>
                <FaAngleLeft className='text-color-primary' size={25}/>
            </span>
            <span className='icon-right' onClick={() => actionRight()}>
                <FaAngleRight className='text-color-primary' size={25}/>
            </span>
        </>
    )
}