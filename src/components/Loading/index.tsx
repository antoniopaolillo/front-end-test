import React from 'react';

import { Box } from '@chakra-ui/react';
import BounceLoader from 'react-spinners/BounceLoader';

const Loading = () => {
  return (
    <Box
      position={'absolute'}
      top={'55%'}
      left={'45%'}
    >
      <BounceLoader size={150} color={'#4BC18D'} />
    </Box>
  );
};

export default Loading;
