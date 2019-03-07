import React from 'react';
import ReactDom from 'react-dom';


const App = () => {
  return <div>Hi!</div>
}

//take this component and generate HTML and put on dom
ReactDom.render(<App />, document.querySelector('.container'));
