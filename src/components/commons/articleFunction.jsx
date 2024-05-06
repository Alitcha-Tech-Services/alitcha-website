import './../../styles/features/detailArticle.css';

/* eslint-disable react/prop-types */

export default function ArticleFunction({title, titleDetails, detailArticleImage1, text1, text2, imageTitle, detailArticleImage2, text3, datePublishing}) {
  return (
    <div>
        <div className='container text-white mt-5 mb-5'>
            <div className='d-flex justify-content-between articleDetailTitle'>
                <h1>{title}</h1>
                <p className='text-end'>{titleDetails}</p>
            </div>
            <div>
                <img src={detailArticleImage1} alt='detailImage1' className='articleDetailImage1' />
            </div>
            <div>
                <p className='articlePJustify'>{text1}</p><br></br>
                <p className='articlePJustify'>{text2}</p>
                <div>
                    <p>{imageTitle}</p>
                    <img src={detailArticleImage2} alt='detailImage2' className='articleDetailImage2' />
                </div>
                <div>
                    <p className='articlePJustify'>{text3}</p>
                </div>
                <p className='mt-2'>Publié le {datePublishing} </p>
            </div>
        </div>
    </div>
  )
}
