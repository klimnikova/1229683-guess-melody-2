import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      time={0}
      mistakesCount={0}
      questions={[{
        type: `genre`,
        genre: `folk`,
        answers: [
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/8/8f/The_years_go_by_time_is_running_out_AS_Ptz_2018.ogg`,
            genre: `jazz`,
          },
        ]
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
