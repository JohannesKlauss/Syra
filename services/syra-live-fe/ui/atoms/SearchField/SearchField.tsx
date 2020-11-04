import React from 'react';
import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/core';
import { BsSearch } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';

interface Props {
  placeholder?: string
  icon?: IconType;
  onKeyup: (value: string) => void;
  onClick: () => void;
}

const SearchField: React.FC<Props> = ({placeholder, icon, onKeyup, onClick}) => {
  return (
    <InputGroup mx={8}>
      <Input onClick={onClick} placeholder={placeholder} onKeyUp={e => onKeyup(e.target.value)} />
      <InputRightElement children={<Box as={icon} color="gray.500" />} />
    </InputGroup>
  );
};

SearchField.defaultProps = {
  icon: BsSearch
};

export default SearchField;
