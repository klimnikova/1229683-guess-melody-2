import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({adapter: new Adapter()});

it(`onChange works correctly on GenreQuectionScreen`, () =>{
  const onChange = jest.fn();
  const genrequestionscreen = shallow(<GenreQuestionScreen
    question = {{
      type: `picture`,
      genre: `classic`,
      answers: [
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/8/8f/The_years_go_by_time_is_running_out_AS_Ptz_2018.ogg`,
          genre: `jazz`,
        },
      ]
    }}
    onAnswer={onChange}
  />);

  const genrequestionform = genrequestionscreen.find(`input`);
  genrequestionform.simulate(`change`, {target: {value: `answer-0`}});
  expect(onChange).toHaveBeenCalledWith(`answer-0`);
});
