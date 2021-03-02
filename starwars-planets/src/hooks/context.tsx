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
  initialData: any;
  filteredData: any;
}

const TableContext = React.createContext<ContextTableInterface>({
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
  filteredData: '',
  initialData: '',
});

export default TableContext;