import DerniereAnnonceImg from './../../assets/DerniereAnnonce.jpg'
import "./../../styles/features/DerniereAnnonce.css"

export default function DerniereAnnonce()
{
    return(
        <section className='SectionDerniereAnnonce'>
            <p className='TitreBlocAnnonce'>Dernière annonce</p>
            <div className='BlocDerniereAnnonce'>
                <div className='DivImgDerniereAnnonce'>
                    <img src={DerniereAnnonceImg} className='ImgDerniereAnnonce'></img>
                </div>
                <div className='CorpsDerniereAnnonce'>
                    <p className='EnteteDerniereAnnonce'>Actualité</p>
                    <p className='ParagrapheDerniereAnnonce'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, </p>
                    <p className='DateDerniereAnnonce'>22 Mai 2024</p>
                </div>
            </div>
        </section>
    )
}