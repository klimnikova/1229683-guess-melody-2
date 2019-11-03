import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={{
        type: `picture`,
        genre: `pop`,
        answers: [
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/8/8f/The_years_go_by_time_is_running_out_AS_Ptz_2018.ogg`,
            genre: `jazz`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/8/8f/The_years_go_by_time_is_running_out_AS_Ptz_2018.ogg`,
            genre: `folk`,
          },
        ]
      }}
      onAnswer={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
