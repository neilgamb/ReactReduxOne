import React from 'react';
import ReactDOM from 'react-dom';
// TO DO:
// 1. Create a new component.  This component should produce some HTML
// 2. Take this component's generated HTML and render it to the DOM

const App = () => {  // This is a class, not an instance of the component.
    return <div>Hi!</div>;
}

// const = like var but it will NOT change.  const is reserved for variables that 
// are not meant to be reassigned.  App is not expected to change here.

// '<div>Hi!</div>;' = JSX, a dialect / subset of JS.  Webpack and Babel will transpile 
// JSX into vanilla JS. 
// -> check out Babel compiler to test what JSX will be compiled into (https://babeljs.io/repl/)

// ReactDOM.render(App);  // Doesn't work bc we need to instantiate component 
ReactDOM.render(<App />, document.querySelector('.container'));


