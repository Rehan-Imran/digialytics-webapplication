import "./usercard.scss";

const UserCards = (props) => {
    return (
        <div>
            <div className='card'>
                <div className='design'>
                    <div className='rotatedStyle' />
                </div>
                <div className='card_body'>
                    <img src={props.img} />
                    <div className='card_body_titles'>
                        <div>
                            <div className='card_body_title_name'>
                                <h4>{props.name}</h4>
                            </div>
                            <div className='card_body_title_designation'>
                                <span>{props.designation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCards;