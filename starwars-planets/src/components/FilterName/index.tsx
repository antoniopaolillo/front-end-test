import React, { useContext } from 'react';
import { Input } from '@chakra-ui/react';
import TableContext from 'hooks/context';

function changeFilters(filters: any, setFilters: any, value: string) {
  const { filterByNumericValues } = filters;
  setFilters({ filterByNumericValues, filterByName: { name: value } });
}

function FilterName() {
  const { filters, setFilters } = useContext(TableContext);
  return (
    <Input
      type='text'
      placeholder='Digite o nome do planeta...'
      size='sm'
      onChange={(e) => changeFilters(filters, setFilters, e.target.value)}
    />
  );
}

export default FilterName;
