import React from 'react';
import { ContextTableInterface } from 'services/interfaces';

const TableContext = React.createContext<ContextTableInterface>({
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
  filteredData: null,
  initialData: null,
  setFilters: null,
  request: { loading: true, error: false },
});

export default TableContext;
