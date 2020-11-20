import React from 'react';
import { Box, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/core';
import { RiCheckboxCircleLine } from 'react-icons/ri';

interface Props {
  isSelected: boolean;
  title: string;
  overline?: string;
  subtext?: string;
  onSelect: () => void;
}

const ClickableTextBox: React.FC<Props> = ({isSelected, title, overline, subtext, onSelect, children}) => {
  return (
    <Box
      as={'button'}
      bg={'teal.200'}
      rounded="md"
      fontWeight="semibold"
      _hover={{ bg: 'teal.300' }}
      _focus={{ boxShadow: 'outline' }}
      padding={4}
      margin={4}
      color={'#1A202C'}
      position={'relative'}
      onClick={onSelect}
    >
      {isSelected && <Box as={RiCheckboxCircleLine} position={'absolute'} right={4} top={4}/>}
      <StatLabel>{overline}</StatLabel>
      <StatNumber color={'grey.800'}>{title}</StatNumber>
      <StatHelpText color={'grey.800'}>{subtext}</StatHelpText>
      {children}
    </Box>
  );
};

export default ClickableTextBox;
