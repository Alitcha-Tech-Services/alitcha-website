import { date } from 'yup'
import './../../styles/features/ArticlesEnAvant.css'
import Annonce1 from "./../../assets/Annonce1.jpg"
import Annonce2 from "./../../assets/Annonce2.jpg"
import ArticleItem from './ArticleItem'

export default function ArticleEnAvant()
{
    const data= [
        {
            type: "Actualité",
            description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, ",
            date: "22 Mai 2024",
            image: Annonce1
        },
        {
            type: "Actualité",
            description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, ",
            date: "22 Mai 2024",
            image: Annonce2
        },
        {
            type: "Actualité",
            description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, ",
            date: "22 Mai 2024",
            image: Annonce1
        },
        {
            type: "Actualité",
            description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, ",
            date: "22 Mai 2024",
            image: Annonce2
        }
    ]
    return(
        <section className='SectionArticle'>
            {
                data.map((value, index)=>{return(
                    <ArticleItem key={index} type={value.type} image={value.image} description={value.description} date={value.date}/>
                )})
            }
        </section>
    )
}