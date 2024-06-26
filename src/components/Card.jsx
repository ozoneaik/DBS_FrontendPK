import '../assets/styles/card.css'
// eslint-disable-next-line react/prop-types
const Card = ({Bcolor='primary',title='title',icon='fa-users'}) => (
    <div className={`card CARD radius-10 border-start border-0 border-3 border-${Bcolor}`} style={{width:'100%'}}>
        <div className="card-body">
            <div className="d-flex align-items-center">
                <div>
                    <p className="mb-0 text-secondary">{title}</p>
                    <h4 className={`my-1 text-${Bcolor}`}>4805</h4>
                    <p className="mb-0 font-13">+2.5% from last week</p>
                </div>
                <div className={`widgets-icons-2 rounded-circle bg-${Bcolor}  text-white ms-auto`}>
                    <i className={`fa ${icon}`}></i>

                </div>
            </div>
        </div>
    </div>
);

export default Card;