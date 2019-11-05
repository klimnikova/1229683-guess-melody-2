import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';

it(`GenreQuestionScreencorrectly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      question = {{
        type: `picture`,
        genre: `classic`,
        answers: [
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/8/8f/The_years_go_by_time_is_running_out_AS_Ptz_2018.ogg`,
            genre: `jazz`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/8/8f/The_years_go_by_time_is_running_out_AS_Ptz_2018.ogg`,
            genre: `rock`,
          },
        ]
      }}
      onAnswer={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

