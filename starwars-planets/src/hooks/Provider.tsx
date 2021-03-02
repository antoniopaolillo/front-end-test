import React, { useState } from 'react';
import TableContext from './context';

interface Props {
  children: React.ReactNode;
}

export const TableProvider: React.FC<Props> = (props: Props) => {
  const [initialData, setInitialData] = useState('');
  const [filteredData, setFilteredData] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  return (
    <TableContext.Provider
      value={{
        initialData,
        filteredData,
        filters,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
