import './../../styles/features/detailArticle.css';

/* eslint-disable react/prop-types */

export default function ArticleFunction({title, titleDetails, detailArticleImage1, text1, text2, imageTitle, detailArticleImage2, text3, datePublishing}) {
    return (
    <div id='ArticleFunction'>
        <div className='container text-white mt-5 mb-5'>
            <div className='articleDetailTitle'>
                <h1 className='text-justify text-color-primary'>{title}</h1>
                <div className='mt-5'>
                    <span></span>
                </div>
                <p className='text-justify'>{titleDetails}</p>
            </div>
            <div className='mt-4 mb-4'>
                <img src={detailArticleImage1} alt='detailImage1' className='articleDetailImage1' />
            </div>
            <div>
                <div className='d-flex'>
                    <div className='d-flex flex-row justify-content-center' style={{ width: "30px" }}>
                        <span style={{ width: '2px', height: '300px', 'background-color': 'var(--color-primary)', 'margin-top': '39px' }}></span>
                    </div>
                    <div>
                        <p className='articlePJustify mb-5'>{text1}</p>
                        <p className='articlePJustify'>{text2}</p>
                    </div>
                </div>
                
                <div className='mb-4'>
                    <p className='mx-4 text-start'>{imageTitle}</p>
                    <img src={detailArticleImage2} alt='detailImage2' className='articleDetailImage2 mt-4' />
                </div>
                <div>
                    <p className='articlePJustify'>{text3}</p>
                </div>
                <p className='mt-2 text-start text-color-primary'>Publié le {datePublishing} </p>
            </div>
        </div>
    </div>
    )
}
