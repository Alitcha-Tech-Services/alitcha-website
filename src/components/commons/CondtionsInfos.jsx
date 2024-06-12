
/* eslint-disable react/prop-types */
function CondtionsInfos({title, pieces1, pieces2, pieces3, pieces4}) {
    return (
        <div>
            <div>
                <div className="pb-4">
                    <span className="w-auto px-2 mb-5 pb-3" style={{ 'border-bottom': '3px solid var(--color-primary)' }}>Pour nous rejoindre en tant que {title} , il faut :</span>
                </div>
                <div className="d-flex flex-row justify-content-center mt-5">
                    <div className="d-flex flex-row flex-wrap justify-content-evenly">
                        <p className="text-start mb-5" style={{ maxWidth: '280px' }}>. 01 : {pieces1}.</p>
                        <p className="text-start mb-5" style={{ maxWidth: '280px' }}>. 02 : {pieces2}.</p>
                        <p className="text-start mb-5" style={{ maxWidth: '280px' }}>. 03 : {pieces3}.</p>
                        <p className="text-start mb-5" style={{ maxWidth: '280px' }}>. 04 : {pieces4}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CondtionsInfos;
