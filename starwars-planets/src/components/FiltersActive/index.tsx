import React, { useContext } from 'react';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import TableContext from 'hooks/context';
import { InterfaceNumericFilters } from 'services/interfaces';

function deleteFilter(column: string, filters: any, setFilters: any): void {
  const { filterByName, filterByNumericValues } = filters;
  const updatedNumericFilters = filterByNumericValues.filter(
    (filter: InterfaceNumericFilters) => filter.column !== column
  );
  const updatedFilters = {
    filterByName,
    filterByNumericValues: updatedNumericFilters,
  };
  setFilters(updatedFilters);
}

function FilterActive() {
  const { filters, setFilters } = useContext(TableContext);
  return (
    <Box mb='20px'>
      <Text
        color='trybe.300'
        fontSize='25px'
        borderBottom='2px solid'
        width='250px'
        mb='10px'
        mt='10px'
      >
        Filtros ativos
      </Text>
      <Box>
        {filters.filterByNumericValues.map(({ column, comparison, value }) => (
          <Flex
            alignItems='center'
            w='350px'
            justifyContent='space-between'
            mb='10px'
          >
            <Text>{`${column} - ${comparison} - ${value}`}</Text>
            <Button onClick={() => deleteFilter(column, filters, setFilters)}>
              X
            </Button>
          </Flex>
        ))}
      </Box>
      {filters.filterByNumericValues.length === 0 && (
        <Text>Não há filtros ativos</Text>
      )}
    </Box>
  );
}

export default FilterActive;
