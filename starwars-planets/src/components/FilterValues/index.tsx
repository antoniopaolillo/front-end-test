import React, { useContext, useState } from 'react';
import {
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  Select,
  Box,
  Text,
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
    <Box>
      <Text
        color='trybe.300'
        fontSize='25px'
        borderBottom='2px solid'
        width='250px'
        mb='10px'
      >
        Filtros Numéricos
      </Text>
      <Flex w='100%' justifyContent='flex-start' alignItems='flex-end'>
        <Box w='200px'>
          <Text>Selecione a coluna</Text>
          <Select onChange={(e) => setColumn(e.target.value)} value={column}>
            {columnOptions(filterByNumericValues).map((column: string) => (
              <option key={column} value={column}>
                {column}
              </option>
            ))}
          </Select>
        </Box>
        <Box w='200px' ml='30px'>
          <Text>Selecione a comparação</Text>
          <Select
            onChange={(e) => setComparison(e.target.value)}
            value={comparison}
          >
            <option value=''></option>
            <option value='maior que'>maior que</option>
            <option value='menor que'>menor que</option>
            <option value='igual'>igual</option>
          </Select>
        </Box>
        <Box w='200px' ml='30px'>
          <Text>Digite o valor</Text>
          <NumberInput onChange={(e) => setValue(e)} value={value}>
            <NumberInputField />
          </NumberInput>
        </Box>
        <Button
          ml='30px'
          onClick={addFilter}
          disabled={!column || !comparison || !value}
          title={'Preencha todos os filtros!'}
        >
          Adicionar Filtro
        </Button>
      </Flex>
    </Box>
  );
}

export default FilterValues;
