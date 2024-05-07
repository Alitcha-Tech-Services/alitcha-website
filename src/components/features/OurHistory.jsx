/* //import React from 'react'; */
import './../../styles/features/OurHistory.css';

import a_propos_logo_techs from './../../assets/a_propos_logo_techs.png';

function OurHistory() {
    return (
        <div>
            <div className="mt-20 text-white pt-5 pb-5 containerHistory">
                <h2 className="text-center">Notre Histoire</h2>
                <div className='d-flex justify-content-around contentHistory'>
                    <div>
                        <img src={a_propos_logo_techs} alt="a_propos_logo_techs"  className='contentHistoryImage'/>
                    </div>
                    <div className='contentHistoryTest'>
                        <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurHistory;
