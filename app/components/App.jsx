import React from 'react';
import Game from './Game';
import Connection from './Connection';

export default class App extends React.Component {
    render() {

        var MY_CARDS = [
            {name: 'Abraj Al-Bait Clock Tower', height: '601', city: 'Mecca'},
            {name: 'Burj Khalifa', height: '830', city: 'Dubai'},
            {name: 'One World Trade Center', height: '541', city: 'New York'},
            {name: 'Petronas Tower', height: '452', city: 'Kuala Lumpur'}
        ];

        var OPPONENT_CARDS = [
            {name: 'Shanghai Tower', height: '632', city: 'Shanghai'},
            {name: 'Ping An Finance Centre', height: '599', city: 'Shenzhen'},
            {name: 'Zifeng Tower', height: '450', city: 'Nanjing'},
            {name: 'Al Hamra Tower', height: '413', city: 'Kuwait City'}
        ];

        return (
            <div>
                <Connection />
                <Game mycards={MY_CARDS} opponentcards={OPPONENT_CARDS}/>
            </div>
        );
    }
}