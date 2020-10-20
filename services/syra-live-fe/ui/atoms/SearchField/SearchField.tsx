import React from 'react';
import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/core';
import { BsSearch } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

interface Props {
}

function SearchField({}: Props) {
  const { t } = useTranslation();

  return (
    <InputGroup mx={8}>
      <Input placeholder={`${t('Search')} ${' '} ${t('S Y R A')}`} />
      <InputRightElement children={<Box as={BsSearch} color="gray.500" />} />
    </InputGroup>
  );
}

export default SearchField;
