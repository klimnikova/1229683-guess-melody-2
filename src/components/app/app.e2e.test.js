import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () =>{
  const clickHandler = jest.fn();
  const app = shallow(<App
    time = {1}
    mistakes = {1}
    onClick={clickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
