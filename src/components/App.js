import React from 'react';
import CardHolder from './card/CardHolder';
import CardHeader from './card/CardHeader';
import CardMainContent from './card/CardMainContent';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

class App extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    renderCards = (socialCardArr) => {
        const cards = socialCardArr.map(card =>
            (
                <CardHolder key={card.key}>
                    <CardHeader id={card.key} />
                    <CardMainContent id={card.key} />
                </CardHolder>
            )
        );
        return cards;
    };

    render() {
        const { socialCardArr } = this.props;
        console.log(socialCardArr);
        if (socialCardArr.length === 0) {
            return(
                <div>
                    <h2>Social Cards - React Using Context</h2>
                    <hr />
                    loading...
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Social Cards - React Using Context</h2>
                    <hr />
                    {this.renderCards(socialCardArr)}
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    return { socialCardArr: state.socialCardArr}
};

export default connect(mapStateToProps, { getData })(App);

