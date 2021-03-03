import React, { useEffect, useState } from 'react';
import fetchApi from 'services/fetchApi';
import finalData from 'services/filterServices';
import { PlanetInterface, Props } from 'services/interfaces';
import TableContext from './context';

export const TableProvider: React.FC<Props> = (props: Props) => {
  const [initialData, setInitialData] = useState(null);
  const [request, setRequest] = useState({ loading: true, error: false });
  const [filteredData, setFilteredData] = useState<null | PlanetInterface[]>(
    null
  );
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    fetchApi(setInitialData, setRequest);
  }, []);

  useEffect(() => {
    if (initialData) {
      setFilteredData(
        finalData(
          initialData || [],
          filters.filterByNumericValues,
          filters.filterByName.name
        )
      );
    }
  }, [filters, initialData]);

  return (
    <TableContext.Provider
      value={{
        setFilters,
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
