import Button from "./Button";
import '../../styles/commons/conference.css'

/* eslint-disable react/prop-types */
export default function ConferenceItem({title, description}) {

    return (
        <>
            <div id="conference-item">
                <h5>{title}</h5>
                <div>
                    {description}
                </div>
                <Button text={"S'inscrire"} className={"btn border text-white"} />
            </div>
        </>
    )
}