import './MainContentTopArea.css';
import React from 'react';
import { connect } from 'react-redux';

const MainContentTopArea = props => {

    //changing light colors for darker colors in background
    const checkColor = color => {
        switch (color) {
            case 'azure':
                color = 'red';
                break;
            case 'ivory':
                color = 'turquoise';
                break;
            case 'lavender':
                color = 'purple';
                break;
            case 'mint green':
                color = 'green';
                break;
            case 'sky blue':
                color = 'blue';
                break;
            case 'white':
                color = 'black';
                break;
            case 'yellow':
                color = 'salmon';
                break;
            default:
                break;
        }
        return color;
    }

    const showTopContent = () => {
        const {avatar, color, firstName, lastName, personalPic, product} = props.socialCardArr[props.id];
        if (!avatar) {
            return null;
        } else {
            let correctColor = checkColor(color);
            return (
                <div style={{
                    backgroundColor: `${correctColor}`,
                    borderRadius: '10px 10px 0 0'
                }}>
                    <div className="topAreaContainer">
                        <img className="avatarMainContent" src={avatar} alt="" />
                        <h1>{product}</h1>
                        <div className="nameContainer">
                            <span className="nameOfPerson"
                                  style={{color: `${correctColor}`
                                  }}>
                                {`${firstName} ${lastName}`}
                            </span>
                            <img className="personalPic" src={personalPic} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            {showTopContent()}
        </div>
    )
}

const mapStateToProps = state => {
    return { socialCardArr: state.socialCardArr}
};

export default connect(mapStateToProps)(MainContentTopArea);