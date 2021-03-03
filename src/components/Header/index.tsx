import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import TrybeLogo from '../../assets/trybe_logo.png';

function Header() {
  return (
    <Flex backgroundColor='trybe.300' alignItems='center'>
      <Image h='100px' src={TrybeLogo} alt='Trybe Logo' />
      <Text
        fontSize='40px'
        fontWeight='bold'
        textAlign='center'
        color='trybe.200'
      >
        StarWars Planets
      </Text>
    </Flex>
  );
}

export default Header;
