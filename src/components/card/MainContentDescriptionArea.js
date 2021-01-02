import './MainContentDescriptionArea.css';
import React from 'react';
import { connect } from 'react-redux';

const MainContentDescriptionArea = props => {

    const showDesc = () => {
        const {product, productDesc, webAddress} = props.socialCardArr[props.id];
        if (!product) {
            return null;
        } else {
            return (
                <div className="descContainer">
                    <h2>{product}</h2>
                    <p>{productDesc}</p>
                    <p className="makeLightGrey">{webAddress}</p>
                </div>
            )
        }
    };

    return (
        <div>
            {showDesc()}
        </div>
    )
};

const mapStateToProps = state => {
    return { socialCardArr: state.socialCardArr}
};

export default connect(mapStateToProps)(MainContentDescriptionArea);