import React, { useContext } from 'react';
import {
  Table as ChakraTable,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
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
  const tags = arrayOfTags(currentData);

  return (
    <ChakraTable variant='striped' colorScheme='green' size='sm'>
      <Thead>
        <Tr>
          {tags.map((tag) => (
            <Th key={tag}>{tag.replace('_', ' ')}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {currentData.map((planet: any) => (
          <Tr key={planet.name}>
            {tags.map((tag) => (
              <Td>{planet[tag]}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;
