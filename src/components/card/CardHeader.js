import './CardHeader.css';
import React from 'react';
import { connect } from 'react-redux';

const CardHeader = props => {

    const showContent = () => {
        const {companyName, avatar, firstName, lastName, product, randomDate} = props.socialCardArr[props.id];
        if (!companyName) {
            return null;
        } else {
            return (
                <div>
                    <img className="avatar" src={avatar} alt=""/>
                    <div className="headerTextContainer">
                        <p><span className="companyName">{`${companyName}`}</span><span className="makeLightGrey">{` @${companyName.replace(/[^A-Za-z0-9!?]/g,'')}  •  ${randomDate}`}</span></p>
                        <p>{`${product}`}</p>
                        <p>
                            <span>{`{ author: `}</span>
                                <span className="makeBlue">{`@${firstName.charAt(0)}${lastName}`}</span>
                                <span>{`}`}</span>
                        </p>
                    </div>
                </div>
            )
        }
    };

    return(
        <div>
            {showContent()}
        </div>
    )
};

const mapStateToProps = state => {
    return { socialCardArr: state.socialCardArr}
};

export default connect(mapStateToProps)(CardHeader);