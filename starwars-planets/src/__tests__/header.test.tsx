import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/header';

describe('renders learn react link', () => {
  it('should show trybe logo and text StarWars Planetss', () => {
      const { getByAltText, getByText } = render(<Header />);

      const trybeLogo = getByAltText('Trybe Logo');
      const starwarsPlanetsText = getByText('StarWars Planets');

      expect(trybeLogo).toBeInTheDocument();
      expect(starwarsPlanetsText).toBeInTheDocument();
  });
});
