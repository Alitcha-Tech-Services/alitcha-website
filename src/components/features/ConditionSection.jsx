import '../../styles/features/condition.css'
import PaginateIcons from '../commons/PaginateIcons'

export default function ConditionSection () {

    return (
        <>
            <div className='condition-section m-auto'>
                <h3 className='mb-5'>Conditions</h3>
                <div className='condition-container w-100 m-auto'>
                    <div className='condition-next-container h-100 d-flex align-items-center'>
                        <div className='condition-next-container1 d-flex flex-column justify-content-around align-items-center ms-5' style={{fontSize:'17px'}}>
                            <h5 className='text-start' style={{fontSize:'17px'}}>Pour rejoindre Alitcha, il faut :</h5>
                            <span className='text-color-primary'>En tant que membre</span>
                            <p className='text-start mt-3'>
                                01 : Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className='text-start mt-3'>
                                01 : Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className='text-start mt-3'>
                                01 : Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className='text-start mt-3'>
                                01 : Jorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <PaginateIcons />
                </div>
            </div>
        </>
    )
}