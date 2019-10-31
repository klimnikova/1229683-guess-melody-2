import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcomescreen/welcomescreen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        time,
        mistakesCount,
      } = props;

      return <WelcomeScreen
        time={time}
        mistakesCount={mistakesCount}
        onStartButtonClick = {onUserAnswer}
      />;
    }
    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      time,
      mistakesCount,
      questions,
    } = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });


  }
}


export default App;


App.propTypes = {
  time: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  questions: PropTypes.array,
};
