import React, { useContext } from 'react';
import Header from 'components/Header';
import Table from 'components/Table';
import TableContext from 'hooks/context';
import FilterName from 'components/FilterName';

function Home() {
    const { request } = useContext(TableContext);
    if(request.loading) return <>Loading</>;
  return (
    <>
      <Header />
      <FilterName />
      <Table />
    </>
  );
}

export default Home;
