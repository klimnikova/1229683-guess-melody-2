import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcomescreen';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      mistakesCount={0}
      onStartButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
