import React from 'react';

export default class Card extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            hovering: 'hover'
        };
    }

    cardClicked = () => {
        if (this.state.hovering === ''){
            this.setState({hovering: 'hover'});
        } else {
            this.setState({hovering: ''});
        }
    };

    render () {
        var liClass = "flex-item flip-container " + this.state.hovering;

        return (
             <li className={liClass} onClick={this.cardClicked}>
                <div className="flipper">
                    <div className="front">
                        <ul className="card-detail">
                            <li><span className="name">{this.props.card.name}</span></li>
                            <li><span>{this.props.card.height}</span></li>
                            <li><span>{this.props.card.city}</span></li>
                        </ul>
                    </div>
                    <div className="back"></div>
                </div>
            </li>
        );
    }
}
