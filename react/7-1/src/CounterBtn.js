import React from 'react';


class CounterBtn extends React.Component {
    state = {
        count: 0
        };

    handleClick = () => {
        // Use updater function when new state is derived from old
        this.setState({ count: this.state.count + 1 });
        };


    render() {
        return (<div>
                <button onClick={this.handleClick}>Click me</button>
                <div>{this.state.count}</div>
            </div>
        );
    }
}

export default CounterBtn;
