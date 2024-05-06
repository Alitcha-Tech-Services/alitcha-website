/* eslint-disable react/prop-types */
export default function Button({ type , text, className}){
    return (
        <>
            <button 
                type={type} 
                className={className} 
                // style={{backgroundColor:"#EF7B20", width:"215px", height:"58px", fontSize:"20px,", fontWeight:"bold"}}
                
            >{text}</button>
        </>
    )
}