// import React from 'react';

import './../../styles/commons/visionCardItem.css';

export default function VisionCardItem(text) {
    return (
        <div>
            <div className='cardItemContent'>
                <div className="cardItemContent1">
                    <span className='cardItemContentSpan'></span>
                </div>
                <div className="cardItemContent2">
                    <p className="text-justify">{text.text}</p>
                </div>
            </div>
        </div>
    );
}
