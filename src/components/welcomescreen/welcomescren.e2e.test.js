import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcomescreen';

Enzyme.configure({adapter: new Adapter()});

it(`WelcomeScreen is correctly rendered after relaunch`, () =>{
  const clickHandler = jest.fn();
  const welcomescreen = shallow(<WelcomeScreen
    time = {1}
    mistakesCount = {1}
    onStartButtonClick={clickHandler}
  />);

  const startButton = welcomescreen.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
