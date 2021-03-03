import React, { useContext } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import TableContext from 'hooks/context';

function changeFilters(filters: any, setFilters: any, value: string) {
  const { filterByNumericValues } = filters;
  setFilters({ filterByNumericValues, filterByName: { name: value } });
}

function FilterName() {
  const { filters, setFilters } = useContext(TableContext);
  return (
    <Box>
      <Text
        color='trybe.300'
        fontSize='25px'
        borderBottom='2px solid'
        width='250px'
        mb='10px'
        mt='10px'
      >
        Filtro por nome
      </Text>
      <Input
        type='text'
        placeholder='Digite o nome do planeta...'
        width='350px'
        onChange={(e) => changeFilters(filters, setFilters, e.target.value)}
      />
    </Box>
  );
}

export default FilterName;
