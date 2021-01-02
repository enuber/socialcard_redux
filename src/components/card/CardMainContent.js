import './CardMainContent.css';
import React from 'react';
import MainContentTopArea from './MainContentTopArea';
import MainContentDescriptionArea from './MainContentDescriptionArea';

const CardMainContent = props => {
    return (
        <div className="mainCard">
            <MainContentTopArea id={props.id} />
            <MainContentDescriptionArea id={props.id} />
        </div>
    )
};

export default CardMainContent;