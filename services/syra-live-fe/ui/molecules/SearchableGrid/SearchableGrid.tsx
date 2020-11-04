import React, { useEffect } from 'react';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/core';
import SearchField from '../../atoms/SearchField/SearchField';
import useFuseSearch from '../../../hooks/useFuseSearch';

interface Props<T> {
  data?: ReadonlyArray<T>;
  searchKeys: string[];
  title?: string;
  placeholder?: string;
  render: (item: T) => JSX.Element;
}

function SearchableGrid<T>({ data, searchKeys, title, placeholder, render }: Props<T>) {
  const { initFuse, results, searchString, setSearchString } = useFuseSearch<T>(searchKeys);

  useEffect(() => {
    if (data) {
      initFuse(data);
    }
  }, [data, initFuse]);

  const filteredData = searchString.length === 0 && data ? data : results;

  return (
    <Box>
      <Flex align={'center'}>
        {title && <Text fontWeight={600}>{title}</Text>}
        <SearchField placeholder={placeholder} onKeyup={setSearchString}/>
      </Flex>
      <SimpleGrid columns={4}>
        {filteredData.map(item => render(item))}
      </SimpleGrid>
    </Box>
  );
}

export default SearchableGrid;
