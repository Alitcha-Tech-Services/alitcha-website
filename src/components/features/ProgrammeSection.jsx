import ConferenceItem from "../commons/ConferenceItem";
import '../../styles/features/conferenceSection.css'
import PaginateIcons from "../commons/PaginateIcons";

export default function ProgrammeSection(){

    const donne = [

        {
            title : "Korem",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Korem",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Korem",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Korem",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },

    ]

    return (
        <>
            <div id="conference-section" className="mt-5">
                <h3>
                    Programmes
                </h3>
                <div className="d-flex flex-wrap">
                        {
                            donne.map((value, index) => {
                                return (
                                    <ConferenceItem key={index} title={value.title} description={value.description}/>
                                )
                            })
                        }
                        
                </div>
                <PaginateIcons />
            </div>
        </>
    )
}