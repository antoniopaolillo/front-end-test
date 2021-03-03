import React, { useContext } from 'react';
import Header from 'components/Header';
import Table from 'components/Table';
import TableContext from 'hooks/context';
import FilterName from 'components/FilterName';
import FilterValues from 'components/FilterValues';
import { Box, Divider } from '@chakra-ui/react';

function Home() {
  const { request } = useContext(TableContext);
  if (request.loading) return <>Loading</>;

  return (
    <>
      <Header />
      <Box pl="20px" pr="20px">
        <FilterName />
        <Divider my='10px'></Divider>
        <FilterValues />
        <Divider my='10px'></Divider>
        <Table />
      </Box>
    </>
  );
}

export default Home;
