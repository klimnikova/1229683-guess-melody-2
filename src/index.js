import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const init = () => {
  ReactDOM.render(
      <App time = {7} mistakes = {4}/>,
      document.querySelector(`#root`)
  );
};

init();
