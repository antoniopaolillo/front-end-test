import React, { useContext } from 'react';
import Header from 'components/Header';
import Table from 'components/Table';
import TableContext from 'hooks/context';
import FilterName from 'components/FilterName';
import FilterValues from 'components/FilterValues';
import { Box, Divider } from '@chakra-ui/react';
import FilterActive from 'components/FiltersActive';
import Loading from 'components/Loading';

function Home() {
  const {
    request: { loading },
  } = useContext(TableContext);

  return (
    <>
      <Header />
      {loading && <Loading />}
      <Box pl='20px' pr='20px' opacity={loading ? 0.2 : 1}>
        <FilterName />
        <Divider my='10px'></Divider>
        <FilterValues />
        <Divider my='10px'></Divider>
        <FilterActive />
        <Divider my='10px'></Divider>
        <Table />
      </Box>
    </>
  );
}

export default Home;
