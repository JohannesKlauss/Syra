import React from 'react';
import { Flex } from "@chakra-ui/react";
import { MdChevronLeft } from 'react-icons/md';

interface Props {
  trigger: (e: React.MouseEvent) => void;
}

const TrimEndHandle: React.FC<Props> = ({trigger}: Props) => {
  return (
    <Flex
      pos={'absolute'}
      bottom={'5px'}
      right={'5px'}
      cursor={'e-resize'}
      width={'15px'}
      height={'15px'}
      borderRadius={'8px'}
      bg={'gray.50'}
      color={'gray.900'}
      align={'center'}
      justify={'center'}
      onMouseDown={trigger}
    >
      <MdChevronLeft />
    </Flex>
  );
};

export default React.memo(TrimEndHandle);
