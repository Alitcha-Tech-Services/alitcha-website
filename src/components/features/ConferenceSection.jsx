import ConferenceItem from "../commons/ConferenceItem";
import '../../styles/features/conferenceSection.css'
import PaginateIcons from "../commons/PaginateIcons";

export default function ConferenceSection(){

    const donne = [

        {
            title : "Conférence sur l'intelligence Artificielle",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Conférence sur l'intelligence Artificielle",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Conférence sur l'intelligence Artificielle",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Conférence sur l'intelligence Artificielle",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Conférence sur l'intelligence Artificielle",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Conférence sur l'intelligence Artificielle",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        },
        {
            title : "Conférence sur l'intelligence Artificielle",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. vero possimus sit recusandae officia similique bla."
        }

    ]

    return (
        <>
            <div id="conference-section" className="d-flex">
                <div className="conference-incon-container">
                    <h5>Conférences</h5>
                    <PaginateIcons />
                </div>
                    {
                        donne.map((value, index) => {
                            return (
                                <ConferenceItem key={index} title={value.title} description={value.description}/>
                            )
                        })
                    }
                    
                    
            </div>
        </>
    )
}