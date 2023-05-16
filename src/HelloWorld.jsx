import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello, World!' };
    }

    handleClick = () => {
        this.setState({ message: 'Button clicked!' });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default HelloWorld;