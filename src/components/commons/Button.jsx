/* eslint-disable react/prop-types */
export default function Button({ type , text, className}){
    return (
        <div>
            <button 
                type={type} 
                className={className} 
                
            >{text}</button>
        </div>
    )
}