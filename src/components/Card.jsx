import '../assets/styles/card.css'
// eslint-disable-next-line react/prop-types
const Card = ({Bcolor='primary',title='title',icon='fa-users'}) => (
    <>
        <div className={`position-relative card CARD radius-10 border-start border-0 border-3 border-${Bcolor}`}
             style={{width: '100%'}}>
            <div className="card-body mt-3">
                <div className="d-flex align-items-center">
                    <div>
                        <p className="mb-0 text-secondary">{title}</p>
                        <h4 className={` text-${Bcolor}`}>4805</h4>
                        <span>+2.5%</span>
                    </div>
                    <div className={`widgets-icons-2 rounded-circle bg-${Bcolor}  text-white ms-auto`}>
                        <i className={`fa ${icon}`}></i>
                    </div>
                </div>
            </div>
            <div className={'position-absolute'} style={{right: 10,top: 5}}>
                <i className={`fa fa-question border border-1 px-2 py-1 rounded-circle`} style={{fontSize: 12}}></i>
            </div>
        </div>


    </>
);

export default Card;