import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen';

Enzyme.configure({adapter: new Adapter()});

it(`onChange works correctly on ArtistQuectionScreen`, () =>{
  const onChange = jest.fn();
  const artistquestionscreen = shallow(<ArtistQuestionScreen
    question = {{
      type: `artist`,
      song: {
        artist: `Jim Beam`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `John Snow`,
        },
      ]
    }}
    onAnswer={onChange}
  />);

  const artistquestionform = artistquestionscreen.find(`input`);
  artistquestionform.simulate(`change`, {target: {value: `answer-0`}});
  expect(onChange).toHaveBeenCalledWith(`answer-0`);
});
