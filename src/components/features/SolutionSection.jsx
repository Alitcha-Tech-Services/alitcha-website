import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import SolutionComp from '../commons/SolutionComp';
import '../../styles/features/solutionSection.css';
import PaginateIcons from '../commons/PaginateIcons';
import SolutionCompImage from '../../assets/SolutionCompImage.jpeg';
import solutioncompimage1 from '../../assets/solutioncompimage1.jpeg';
import SolutionCompImage2 from '../../assets/SolutionCompImage2.jpeg';



function SolutionSection() {
    const cats = [
        { id: 1, catName: "Intelligence Artificiel", nbrProject: "21", image: SolutionCompImage },
        { id: 2, catName: "Design Graphique", nbrProject: "25", image: solutioncompimage1 },
        { id: 3, catName: "Developpeur web", nbrProject: "30", image: SolutionCompImage2 },
        { id: 4, catName: "Developpeur Mobile", nbrProject: "24", image: solutioncompimage1 },
        { id: 5, catName: "Data Base Administrator", nbrProject: "4",image: SolutionCompImage },
        { id: 6, catName: "Systeme Securité", nbrProject: "10", image: solutioncompimage1 },
        { id: 7, catName: "Data Scientist", nbrProject: "", image: SolutionCompImage },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const visibleCats = cats.filter(cat => cat.catName.toLowerCase().includes(searchTerm.toLowerCase()));

    const isLargeScreen = useMediaQuery({ query: '(min-width: 1101px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 701px) and (max-width: 1100px)' });
    const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' });

    useEffect(() => {
        if (isLargeScreen) {
            setItemsPerPage(3);
        } else if (isMediumScreen) {
            setItemsPerPage(2);
        } else if (isSmallScreen) {
            setItemsPerPage(1);
        }
    }, [isLargeScreen, isMediumScreen, isSmallScreen]);


    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (startIndex < visibleCats.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setStartIndex(0); // Réinitialise l'index de départ
    };

    const handleGoClick = (event) => {
        event.preventDefault();
        console.log('Recherche appliquée pour:', searchTerm); // Vous pouvez ajouter une logique spécifique pour le bouton GO ici
    };

    return (
        <div id='SolutionSection' className="d-flex flex-row justify-content-center">
            <div className="SolutionSectionContainer">
                <h3 className='text-center mb-5 text-color-primary'>Les solutions</h3>
                <div className="d-flex flex-row justify-content-center mb-5">
                    <div className="SolutionSectionSearch d-flex flex-row justify-content-center">
                        <form className="d-flex" role="search" onSubmit={handleGoClick}>
                            <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Découvrir nos projets" aria-label="Search" value={searchTerm} onChange={handleSearchChange}/>
                            <button className="background-primary py-3 w-auto button-hover">GO</button>
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5 SolutionSectionContentCompo">
                    {
                        visibleCats.slice(startIndex, startIndex + itemsPerPage).map((value, index) => (
                            <SolutionComp key={index} iIndex={value.id} catName={value.catName} nbrProject={value.nbrProject} image={value.image} />
                        ))
                    }
                </div>
                <div className="d-flex justify-content-center">
                    <PaginateIcons actionLeft={handleLeftClick} actionRight={handleRightClick} />
                </div>
            </div>
        </div>
    );
}

export default SolutionSection;

