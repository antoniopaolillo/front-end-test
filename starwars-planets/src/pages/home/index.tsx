import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import Header from 'components/Header';
import Table from 'components/Table';
import TableContext from 'hooks/context';

function Home() {
    const { request } = useContext(TableContext);
    if(request.loading) return <Box>Loading</Box>;
  return (
    <Box>
      <Header />
      <Table />
    </Box>
  );
}

export default Home;
