import './../../styles/features/Article.css'; 
import Article from './Article';
import articleImage from '../../assets/articleImage.jpeg';


export default function ArticlesComponent() {

  const articleInfo=[
      {
          image: articleImage,
          articleTitle: "Article sur lIA ",
          nomAuteur: "Joseph AYI",
          datePublished: "24/08/1/24 à 16h",
      },

      {
          image: articleImage,
          articleTitle: "Article sur lIA ",
          nomAuteur: "TCHONKLOE Thierry",
          datePublished: "24/08/1/24 à 16h",
      },

      {
          image: articleImage,
          articleTitle: "Article sur lIA ",
          nomAuteur: "Joseph TCHONKLOE",
          datePublished: "24/08/1/24 à 16h",
      },

      {
          image: articleImage,
          articleTitle: "Article sur lIA ",
          nomAuteur: "Joseph TCHONTY",
          datePublished: "24/08/1/24 à 16h",
      }
  ];

    return(
      <div className='containerArticleContainer'>
        <div>
            <h3 className='text-center mb-5 text-color-primary'>Articles</h3> 
            <div className='articleContainer'>
                {
                    articleInfo.map((value, index) => {
                        return(
                            <div key={index}>
                                <Article image={value.image} articleTitle={value.articleTitle} nomAuteur={value.nomAuteur} datePublished={value.datePublished} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
      </div>
    )
}