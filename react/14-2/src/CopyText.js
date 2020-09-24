import React, { Component } from 'react';

class CopyText extends Component {
    textAreaRef = React.createRef();

    copyTextArea = () => {
        this.textAreaRef.current.select();
        document.execCommand("copy");
    }


    render() {
        return (
            <div className="copy">
                <h2>{this.props.text}</h2>
                <textarea ref={this.textAreaRef}></textarea>
                <button onClick={this.copyTextArea} >COPY</button>
            </div>
        );
    }
}

export default CopyText;