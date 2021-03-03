import React, { useEffect, useState } from 'react';
import fetchApi from 'services/fetchApi';
import TableContext from './context';

interface Props {
  children: React.ReactNode;
}

export const TableProvider: React.FC<Props> = (props: Props) => {
  const [initialData, setInitialData] = useState(null);
  const [request, setRequest] = useState({ loading: true, error: false });
  const [filteredData, setFilteredData] = useState(null);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    fetchApi(setInitialData, setRequest);
  }, []);
  return (
    <TableContext.Provider
      value={{
        initialData,
        filteredData,
        filters,
        request,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
