import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProfileItem from './ProfileItem';
import { ProfileContext } from '../../contexts/ProfileContext';

const mockSetShowModal = jest.fn();

describe('ProfileItem component', () => {
  it('should render component with given props', () => {
    const props = {
      birth_year: '19BBY',
      gender: 'male',
      hair_color: 'blond',
      height: '172',
      eye_color: 'blue',
      mass: '77',
      name: 'Luke Skywalker'
    };

    const { getByText } = render(
      <ProfileContext.Provider value={{ setShowModal: mockSetShowModal }}>
        <ProfileItem {...props} />
      </ProfileContext.Provider>
    );

    expect(getByText('Luke Skywalker')).toBeInTheDocument();
    expect(getByText('Date of birth:')).toBeInTheDocument();
    expect(getByText('Gender:')).toBeInTheDocument();
    expect(getByText('Hair:')).toBeInTheDocument();
    expect(getByText('Eye:')).toBeInTheDocument();
    expect(getByText('Height:')).toBeInTheDocument();
    expect(getByText('Weight:')).toBeInTheDocument();
  });

  it('should call setShowModal when clicked', () => {
    const props = {
      birth_year: '19BBY',
      gender: 'male',
      hair_color: 'blond',
      height: '172',
      eye_color: 'blue',
      mass: '77',
      name: 'Luke Skywalker',
      onSelectProfile: jest.fn()
    };

    const { getByText } = render(
      <ProfileContext.Provider value={{ setShowModal: mockSetShowModal }}>
        <ProfileItem {...props} />
      </ProfileContext.Provider>
    );

    fireEvent.click(getByText('Luke Skywalker'));

    expect(mockSetShowModal).toHaveBeenCalledWith(true);
    expect(props.onSelectProfile).toHaveBeenCalled();
  });
});