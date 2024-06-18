import "./../../styles/features/ArticleItem.css"
import Annonce2 from "./../../assets/Annonce2.jpg"

export default function ArticleItem({type, image, description, date}){
    return(
        <aside className="BlocArticleItem">
            <div className="BlocImgArticle">
                <img src={image} className="ImgArticle"></img>
            </div>
            <div className="DivCorpsArticle">
                <p className="TypeArticle">{type}</p>
                <p className="DescArticle">{description}</p>
                <p className="DateArticle">{date}</p>
            </div>
        </aside>
    )
}