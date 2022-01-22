import React  from 'react'
import ReactDOM from 'react-dom';
import icon from './test.jpg'

function Welcome(props) {
    return (
        <div>
            <img src={icon} /> 
            <h1>Hello, {props.name}</h1>
        </div>
    );
}

const element = <Welcome name="Nina" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);