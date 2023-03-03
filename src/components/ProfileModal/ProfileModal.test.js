import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('ProfileModal', () => {
  it('should render correctly', () => {
    const props = {
      birth_year: '19BBY',
      gender: 'male',
      hair_color: 'brown',
      height: '172',
      eye_color: 'blue',
      mass: '77',
      name: 'Luke Skywalker',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/'
      ],
      starships: [
        'http://swapi.dev/api/starships/12/',
        'http://swapi.dev/api/starships/22/'
      ]
    }
    //const { container } = render(<ProfileModal {...props} />);
    //expect(container).toMatchSnapshot();
  });
});