import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audioplayer/audioplayer.jsx';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {
      answers,
      genre,
    } = question;

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <div className="timer__value">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer();
        }}>
          {answers.map((it, i) => <div className="track" key={it.id}>
            <AudioPlayer
              src={it.src}
              isPlaying={i === this.state.activePlayer}
              onPlayButtonClick={() => this.setState({
                activePlayer: this.state.activePlayer === i ? -1 : i
              })}
            />
            <div className="game__answer">
              <input className="game__input visually-hidden"
                type="checkbox"
                name="answer"
                value={it.id}
                id={it.id}
                // onChange={(evt) => {
                //   onAnswer(evt.target.value);
                // }}
              />
              <label className="game__check" htmlFor={it.id}>
              Отметить
              </label>
            </div>
          </div>)}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>;
    </section>;
  }
}

export default GenreQuestionScreen;

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
