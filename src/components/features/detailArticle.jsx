import detailArticleImage1 from './../../assets/detailArticleImage1.jpeg';
import detailArticleImage2 from './../../assets/detailArticleImage2.jpeg';
import ArticleFunction from './../commons/ArticleFunction.jsx';


function  DetailArticle(){
    const donne = [
        {
            title: "Forem ipsum dolor amet, ",
            titleDetails: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget",
            detailArticleImage1: detailArticleImage1,
            text1: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus",
            text2: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
            imageTitle: "(Image ...)",
            detailArticleImage2: detailArticleImage2,
            text3: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
            datePublishing: "29 / 02 /2024",
        },
    ]
    return (
        <>
            {
                donne.map((value, index) => {
                    return (
                        <ArticleFunction key={index} title={value.title} titleDetails={value.titleDetails} detailArticleImage1={value.detailArticleImage1} text1={value.text1} text2={value.text2} imageTitle={value.imageTitle} detailArticleImage2={value.detailArticleImage2} text3={value.text3} datePublishing={value.datePublishing}/>
                    )
                })
            }
        </>
    );
}

export default DetailArticle;