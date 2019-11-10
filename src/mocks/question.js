const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: 0,
        src: `http://d.zaix.ru/fCFy.mp3`,
        genre: `jazz`,
      },
      {
        id: 1,
        src: `http://d.zaix.ru/fCFy.mp3`,
        genre: `classic`,
      },
      {
        id: 2,
        src: `http://d.zaix.ru/fCFy.mp3`,
        genre: `rock`,
      },
      {
        id: 3,
        src: `http://d.zaix.ru/fCFy.mp3`,
        genre: `pop`,
      }
    ],
  },
  {
    type: `artist`,
    song: {
      id: 0,
      artist: `Jim Beam`,
      src: `http://d.zaix.ru/fCFy.mp3`,
    },
    answers: [
      {
        id: 1,
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        id: 2,
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        id: 3,
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },

];

export default questions;
