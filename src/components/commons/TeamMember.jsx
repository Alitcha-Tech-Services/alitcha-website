import Samuel from './../../assets/Samuel.png';
import './../../styles/features/CarrouselMembres.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useState } from 'react';

const teamData = [
    {
      name: "YANN Olivia",
      title: "Designer graphique",
      image: Samuel
    },
    {
        name: "Samuel TOHOUEGNON",
        title: "Designer graphique",
        image: Samuel
      },
      {
        name: "Mathias KINNINKPO",
        title: "Dev",
        image: Samuel
      },
      {
        name: "YANN Olivia",
        title: "Designer graphique",
        image: Samuel
      },
      {
        name: "YANN Olivia",
        title: "Designer graphique",
        image: Samuel
      }
    
    // Ajoutez les données des autres membres de l'équipe ici...
  ];

export default function TeamMember()
{
    const [currentMember, setCurrentMember] = useState(0);

  const previousMember = () => {
    setCurrentMember((prevIndex) => (prevIndex === 0 ? teamData.length - 1 : prevIndex - 1));
  };

  const nextMember = () => {
    setCurrentMember((prevIndex) => (prevIndex === teamData.length - 1 ? 0 : prevIndex + 1));
  };
    return(
        <section className='TeamSection'>
            <p>
                Notre équipe
            </p>
            <div className="BlocMember">
                <div className='TeamImages'>
                <div className="BlocImgMember">
                    <img src={teamData[currentMember].image} alt="Image" className='ImgMember'/>
                </div>
                <div className='BlocNextImg'>
                    <p className='NextTitle'>{teamData[currentMember].title}</p>
                    <img src={teamData[currentMember].image} alt="Image" className='NextImgMember'/>
                    
                </div>
                </div>
                <p className="NameMember">
                {teamData[currentMember].name}
                </p>
                <p className="TitleMember">
                {teamData[currentMember].title}
                </p>
            </div>
            <div className="BlocScroll">
            <GrFormPrevious onClick={previousMember} />
            <GrFormNext onClick={nextMember} />
            </div>
        </section>
    )
}