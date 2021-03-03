import React, { useContext } from 'react';
import {
  Table as ChakraTable,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Text,
} from '@chakra-ui/react';
import TableContext from 'hooks/context';

function arrayOfTags(data: any): string[] {
  return Object.entries(data[0])
    .map((tag) => tag[0])
    .filter((name) => name !== 'residents');
}

function Table() {
  const { initialData, filteredData } = useContext(TableContext);
  const currentData = filteredData || initialData;

  if (currentData?.length === 0)
    return <Text>Não há planetas com essas informações!</Text>;

  const tags = arrayOfTags(currentData);

  return (
    <ChakraTable variant='striped' colorScheme='green' size='sm'>
      <Thead>
        <Tr>
          {tags.map((tag) => (
            <Th maxW='100px' key={tag}>
              {tag.replace('_', ' ')}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {currentData?.map((planet: any) => (
          <Tr key={planet.terrain}>
            {tags.map((tag) => (
              <Td
                textOverflow='ellipsis'
                overflow='hidden'
                whiteSpace='nowrap'
                textTransform='capitalize'
                maxW='100px'
                key={planet[tag].diameter}
              >
                {planet[tag]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;
