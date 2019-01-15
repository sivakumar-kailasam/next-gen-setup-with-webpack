import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FunkyButton extends Component {
    onClick = () => console.log(`you clicked button with text: ${this.props.text}`)

    render() {
        console.log({...this.props});
        return <button onClick={this.onClick}>{this.props.text}</button>
    }
}

export function init(text, nodeId) {
    let rootElement = document.createElement('div');
    rootElement.setAttribute('id', nodeId);
    document.body.appendChild(rootElement);
    ReactDOM.render(<FunkyButton text={text} />, rootElement);
}

