import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcomescreen/welcomescreen.jsx';

class App extends React.PureComponent {
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

    return this._getScreen(question, () => {
      this.setState((prevState) => ({
        question: prevState.question + 1,
      }));
    });


  }
  _getScreen(question, onUserAnswer) {
    if (question === -1) {
      const {
        time,
        mistakesCount,
      } = this.props;

      return <WelcomeScreen
        time={time}
        mistakesCount={mistakesCount}
        onStartButtonClick = {onUserAnswer}
      />;
    }
    const {questions} = this.props;
    return <div>
      Игра на вопрос типа {questions[question].type}
    </div>;

  }
}


export default App;


App.propTypes = {
  time: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  questions: PropTypes.array,
};
