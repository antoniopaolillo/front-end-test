import React from 'react';

interface ContextTableInterface {
  filters: {
    filterByName: {
      name: string;
    };
    filterByNumericValues: Array<{
      column: string;
      comparison: string;
      value: string;
    }>;
  };
  initialData: any | null;
  filteredData: any | null;
  request: { loading: boolean; error: boolean };
}

const TableContext = React.createContext<ContextTableInterface>({
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
  filteredData: null,
  initialData: null,
  request: { loading: true, error: false },
});

export default TableContext;
