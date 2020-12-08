import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';

interface Props {
  trigger: (e: React.MouseEvent) => void;
}

const TrimStartHandle: React.FC<Props> = ({ trigger }: Props) => {
  return (
    <Flex
      pos={'absolute'}
      bottom={'5px'}
      left={'5px'}
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
      <MdChevronRight />
    </Flex>
  );
};

export default React.memo(TrimStartHandle);
