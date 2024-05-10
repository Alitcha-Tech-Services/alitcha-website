// import '../Article';
import './../../styles/features/Article.css'; 
import Article from './Article';


export default function ArticlesComponent() {
    return(
        <>
        <h3 className='titleArticles'>Articles</h3> 
          <div className='BlocArticles'>
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </>
    )
}