import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { mockDefaultResponse } from 'services/testMocks';
import Home from 'pages/home';
import { TableProvider } from 'hooks/Provider';
import { async } from 'q';

fetchMock.mock('https://swapi-trybe.herokuapp.com/api/planets/', {
  body: mockDefaultResponse,
  status: 200,
});

describe('Home Page', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should show all planets in table by default', async () => {
    const { queryByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(async () => {
      await mockDefaultResponse.results.forEach((planet) => {
        expect(queryByText(planet.name)).toBeInTheDocument();
      });
    });
  });

  it('change textInput value to "Al" should return one planet called Alderaan', async () => {
    const { getByPlaceholderText, queryByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(async() => {
      const inputText = getByPlaceholderText('Digite o nome do planeta...');

      fireEvent.change(inputText, { target: { value: 'Al' } });
      expect(queryByText('Bespin')).not.toBeInTheDocument();
      await waitFor(() => {
        expect(queryByText('Alderaan')).toBeInTheDocument();
      });
    });
  });

  it('change textInput value to "nothing" should return only text "Não há planetas com essas informações!"', async () => {
    const { getByPlaceholderText, queryByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(() => {
      const inputText = getByPlaceholderText('Digite o nome do planeta...');

      fireEvent.change(inputText, { target: { value: 'nothing' } });
      expect(queryByText('Bespin')).not.toBeInTheDocument();
      expect(
        queryByText('Não há planetas com essas informações!')
      ).toBeInTheDocument();
    });
  });

  it('should field NumericValues show by default text "Não há filtros ativos"', async () => {
    const { queryByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(() => {
      expect(queryByText('Não há filtros ativos')).toBeInTheDocument();
    });
  });

  it('should only show countries with more then 10000 population when this filter is active', async () => {
    const { queryByText, getByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(async () => {
      const columnInput = getByText('Selecione a coluna').nextElementSibling
        ?.firstElementChild;
      const comparisonInput = getByText('Selecione a comparação')
        .nextElementSibling?.firstElementChild;
      const valueInput = getByText('Digite o valor').nextElementSibling
        ?.firstElementChild;
      const buttonAdicionar = getByText('Adicionar Filtro');

      if (columnInput && comparisonInput && valueInput) {
        fireEvent.change(columnInput, { target: { value: 'population' } });
        fireEvent.change(comparisonInput, { target: { value: 'maior que' } });
        fireEvent.change(valueInput, { target: { value: '10000' } });
      }
      fireEvent.click(buttonAdicionar);

      mockDefaultResponse.results
        .filter((planet) => Number(planet.population) > 10000)
        .forEach((planet) =>
          expect(queryByText(planet.name)).toBeInTheDocument()
        );

      mockDefaultResponse.results
        .filter((planet) => Number(planet.population) <= 10000)
        .forEach((planet) =>
          expect(queryByText(planet.name)).not.toBeInTheDocument()
        );
    });
  });

  it('should show filters active in screen', async () => {
    const { queryByText, getByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(async () => {
      const columnInput = getByText('Selecione a coluna').nextElementSibling
        ?.firstElementChild;
      const comparisonInput = getByText('Selecione a comparação')
        .nextElementSibling?.firstElementChild;
      const valueInput = getByText('Digite o valor').nextElementSibling
        ?.firstElementChild;
      const buttonAdicionar = getByText('Adicionar Filtro');
      const possibleFilter = queryByText('rotation_period igual 30');

      if (columnInput && comparisonInput && valueInput) {
        fireEvent.change(columnInput, { target: { value: 'rotation_period' } });
        fireEvent.change(comparisonInput, { target: { value: 'igual' } });
        fireEvent.change(valueInput, { target: { value: '30' } });
      }
      fireEvent.click(buttonAdicionar);

      expect(possibleFilter).toBeInTheDocument();
    });
  });

  it('should not show column option after be actived', async () => {
    const { queryByText, getByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(async () => {
      const columnInput = getByText('Selecione a coluna').nextElementSibling
        ?.firstElementChild;
      const comparisonInput = getByText('Selecione a comparação')
        .nextElementSibling?.firstElementChild;
      const valueInput = getByText('Digite o valor').nextElementSibling
        ?.firstElementChild;
      const buttonAdicionar = getByText('Adicionar Filtro');

      expect(queryByText('rotation_period')).toBeInTheDocument();

      if (columnInput && comparisonInput && valueInput) {
        fireEvent.change(columnInput, { target: { value: 'rotation_period' } });
        fireEvent.change(comparisonInput, { target: { value: 'maior que' } });
        fireEvent.change(valueInput, { target: { value: '30' } });
      }
      fireEvent.click(buttonAdicionar);

      expect(queryByText('rotation_period')).not.toBeInTheDocument();
    });
  });

  it('should filter by name and filters number active work together', async () => {
    const { queryByText, getByText, getByPlaceholderText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(async () => {
      const columnInput = getByText('Selecione a coluna').nextElementSibling
        ?.firstElementChild;
      const comparisonInput = getByText('Selecione a comparação')
        .nextElementSibling?.firstElementChild;
      const valueInput = getByText('Digite o valor').nextElementSibling
        ?.firstElementChild;
      const buttonAdicionar = getByText('Adicionar Filtro');
      const inputText = getByPlaceholderText('Digite o nome do planeta...');

      if (columnInput && comparisonInput && valueInput) {
        fireEvent.change(columnInput, { target: { value: 'diameter' } });
        fireEvent.change(comparisonInput, { target: { value: 'menor que' } });
        fireEvent.change(valueInput, { target: { value: '10000' } });
      }

      fireEvent.click(buttonAdicionar);
      fireEvent.change(inputText, { target: { value: 'En' } });

      expect(queryByText('Hoth')).not.toBeInTheDocument();
      expect(queryByText('Endor')).toBeInTheDocument();
    });
  });

  it('should button X delete respective filter', async () => {
    const { queryByText, getByText } = render(
      <TableProvider>
        <Home />
      </TableProvider>
    );
    await waitFor(async () => {
      const columnInput = getByText('Selecione a coluna').nextElementSibling
        ?.firstElementChild;
      const comparisonInput = getByText('Selecione a comparação')
        .nextElementSibling?.firstElementChild;
      const valueInput = getByText('Digite o valor').nextElementSibling
        ?.firstElementChild;
      const buttonAdicionar = getByText('Adicionar Filtro');

      if (columnInput && comparisonInput && valueInput) {
        fireEvent.change(columnInput, { target: { value: 'diameter' } });
        fireEvent.change(comparisonInput, { target: { value: 'menor que' } });
        fireEvent.change(valueInput, { target: { value: '10000' } });
      }

      fireEvent.click(buttonAdicionar);

      expect(queryByText('Alderaan')).not.toBeInTheDocument();

      const buttonDelete = queryByText('diameter menor que 10000')
        ?.parentElement?.childNodes[1];

      if (buttonDelete) {
        fireEvent.click(buttonDelete);
      }
      await waitFor(() => {
        expect(queryByText('Alderaan')).toBeInTheDocument();
        expect(queryByText('Não há filtros ativos')).toBeInTheDocument();
      });
    });
  });
});
