/* //import React from 'react'; */

import VisionCardItem from "./../commons/VisionCardItem";
import './../../styles/features/ourVisionCard.css';

function OurVisionCard() {
    const visions =[
    "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    ];

    console.log(visions[0]);

    return (
        <div className="visionContainer">
            <h2 className="text-center mb-5 pb-4">Notre vision</h2>
            <div className="screenMin1220px visionContainer1">
                <div className="d-flex flex-column arrowVisionMax">
                    <div className="visionFigure1">
                        <span className="visionSpan1"></span>
                    </div>
                    <div className="d-flex justify-content-between arrowVision12MaxFirst">
                        <div className="arrowVision1MaxFirst">
                            {
                                <VisionCardItem text={visions[0]} />
                            }
                        </div>
                        <div className="arrowVision2MaxFirst">
                            {
                                <VisionCardItem text={visions[1]} />
                            }
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column arrowVisionMax">
                    <div className="visionFigure2">
                        <span className="visionSpan2"></span>
                    </div>
                    <div className="d-flex justify-content-between arrowVision12MaxFirst">
                        <div className="arrowVision3MaxSecond">
                            {
                                <VisionCardItem text={visions[2]} />
                            }
                        </div>
                        <div className="arrowVision4MaxSecond">
                            {
                                <VisionCardItem text={visions[3]} />
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div className="screenMax1220px visionContainer1">
                <div className="d-flex flex-column arrowVisionMin">
                    <div className="visionFigure1">
                        <span className="visionSpan1"></span>
                    </div>
                    <div className="d-flex justify-content-between arrowVision12MaxFirst VisionMaxSecond">
                        <div className="arrowVisionMinFirst">
                            {
                                <VisionCardItem text={visions[0]} />
                            }
                        </div>
                    </div>
                    <div className="visionFigure2">
                        <span className="visionSpan2"></span>
                    </div>
                    <div className="d-flex justify-content-between arrowVision12MaxFirst VisionMaxSecond">
                        <div className="arrowVisionMinFirst">
                            {
                                <VisionCardItem text={visions[1]} />
                            }
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column arrowVisionMin">
                    <div className="visionFigure1">
                        <span className="visionSpan1"></span>
                    </div>
                    <div className="d-flex justify-content-between arrowVision12MaxFirst VisionMaxSecond">
                        <div className="arrowVisionMinSecond">
                            {
                                <VisionCardItem text={visions[2]} />
                            }
                        </div>
                    </div>
                    <div className="visionFigure2">
                        <span className="visionSpan2"></span>
                    </div>
                    <div className="d-flex justify-content-between arrowVision12MaxFirst VisionMaxSecond">
                        <div className="arrowVisionMinSecond">
                            {
                                <VisionCardItem text={visions[3]} />
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurVisionCard;
