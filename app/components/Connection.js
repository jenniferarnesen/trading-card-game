import React from 'react';

export default class Connection extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            peerId: null,
            conn: null,
            peer: null
        };
    }

    connectToPlayer = () => {
        this.state.conn = this.state.peer.connect('dest-peer-id');
        console.log('peer', this.state.peer);
    };

    setupPeer = () => {
        this.state.peer = new Peer({key: '8q8i3mwl8xdbcsor'}), //This is Jennifer's developer API key
            self = this;

        this.state.peer.on('open', function (id) {
            self.setState({
                peerId: id
            });
        });
    };

    render () {
        return (
            <div className="connection">
                <div>
                    <span>My Peer Id is: {this.state.peerId}</span>
                    <button disabled={this.state.peerId} onClick={this.setupPeer}>Set up Peer</button>
                </div>
                <button onClick={this.connectToPlayer}>Connect to opponents id:</button>
                <input className='opponent-id' type='text'/>
            </div>
        );
    }
}


