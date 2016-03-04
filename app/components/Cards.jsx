import React from 'react';
import Card from './Card';

export default class Cards extends React.Component {

    render () {
        let cards = this.props.cards.map(function (thecard) {
            return <Card card={thecard} key={thecard.name} />;
        });

        return (
            <div className={this.props.thekey}>
                <ul className="cards flex-container">
                    {cards}
                </ul>
            </div>
        );
    }
}
