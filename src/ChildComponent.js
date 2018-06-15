import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : 'Hello from Child Component!!!',
            counter : this.props.parentCounter
        }
    }
    changeCounter(){
        this.setState({
            counter: this.state.counter + 10
        })
    }
    render() {
        return (
            <div>
                <p>Component State - {this.state.message}</p>
                <p>Component Props - {this.props.parentCounter}</p>
                <p>Component State Counter - {this.state.counter}</p>
                <button onClick={this.changeCounter.bind(this)}>Change Counter</button>
                <button onClick={this.props.updateCounter}>Change Parent Counter</button>
            </div>
        );
    }
}
    
export default ChildComponent;