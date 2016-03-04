import React from 'react';
import Cards from './Cards';

export default class Game extends React.Component {

    render () {
        return (
            <div clasName="game">
                <Cards cards={this.props.mycards} thekey="my"></Cards>
                <Cards cards={this.props.opponentcards} thekey="opponent"></Cards>
            </div>
        );
    }
}
