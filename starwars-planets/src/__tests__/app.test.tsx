import React from 'react';
import { render, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { mockDefaultResponse } from 'services/testMocks';
import App from 'App';

fetchMock.mock('https://swapi-trybe.herokuapp.com/api/planets/', {
  body: mockDefaultResponse,
  status: 200,
});

describe('Home Page', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should show trybe logo and text StarWars Planets', async () => {
    const { getByAltText, getByText } = render(<App />);
    await waitFor(() => {
      const trybeLogo = getByAltText('Trybe Logo');
      const starwarsPlanetsText = getByText('StarWars Planets');

      expect(trybeLogo).toBeInTheDocument();
      expect(starwarsPlanetsText).toBeInTheDocument();
    });
  });
});
