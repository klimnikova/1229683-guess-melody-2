import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/question';

const init = (gameQuestions) => {
  const settings = {
    time: 7,
    mistakesCount: 8,
  };

  ReactDOM.render(
      <App
        time = {settings.time}
        mistakesCount = {settings.mistakesCount}
        questions = {gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
