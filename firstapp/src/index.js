import React from 'react';
// var React = require('react');
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1> Hii from React </h1>
            <h2> React App</h2>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))