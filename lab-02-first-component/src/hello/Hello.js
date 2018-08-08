import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Howdy!!'
        };
    }
    
    render() {
        return (
            <div className="hello">
                <h1>{this.state.greeting}</h1>
                <h2>{this.props.friend}</h2>
                <p>Congrats! First React Component!</p>
            </div>
        );
    }
}

Hello.defaultProps = {
    friend: 'Partner!',
};

export default Hello;