import React, { useContext, useState } from 'react';
import {
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  Select,
} from '@chakra-ui/react';
import TableContext from 'hooks/context';

const allColumnsToUse = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function columnOptions(filters: any[]): string[] {
  if (filters.length > 0) {
    const arrayOfUsedColumns = filters.map((filter) => filter.column);
    const filteredColumnsToUse = allColumnsToUse.filter(
      (colum) => !arrayOfUsedColumns.includes(colum)
    );
    return filteredColumnsToUse;
  }
  return allColumnsToUse;
}

function FilterValues() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const {
    filters: { filterByNumericValues, filterByName },
    setFilters,
  } = useContext(TableContext);

  function addFilter() {
    setFilters({
      filterByName,
      filterByNumericValues: [
        ...filterByNumericValues,
        { column, comparison, value },
      ],
    });
    setColumn('');
    setComparison('');
    setValue('');
  }

  return (
    <Flex>
      <Select
        onChange={(e) => setColumn(e.target.value)}
        w='30%'
        value={column}
      >
        {columnOptions(filterByNumericValues).map((column: string) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </Select>
      <Select
        onChange={(e) => setComparison(e.target.value)}
        w='30%'
        value={comparison}
      >
        <option value=''></option>
        <option value='maior que'>maior que</option>
        <option value='menor que'>menor que</option>
        <option value='igual'>igual</option>
      </Select>
      <NumberInput onChange={(e) => setValue(e)} value={value}>
        <NumberInputField />
      </NumberInput>
      <Button onClick={addFilter} disabled={!column || !comparison || !value}>
        Adicionar Filtro
      </Button>
    </Flex>
  );
}

export default FilterValues;
