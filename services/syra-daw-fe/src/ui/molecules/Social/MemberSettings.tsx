import {
  Flex,
  IconButton,
  Text,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';
import AvatarMemberList from './AvatarMemberList';
import { RiArrowUpSFill } from 'react-icons/ri';
import EditMemberList from './EditMemberList';
import AddSessionMember from './AddSessionMember';

const MemberSettings: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Flex align={'center'} ml={32}>
          <AvatarMemberList />
          <IconButton
            ml={-4}
            aria-label={'Open member list'}
            icon={<RiArrowUpSFill />}
            colorScheme={'gray'}
            component="span"
            variant={'ghost'}
          />
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Flex align={'center'}>
            <Text>
              Session Members
            </Text>
            <AddSessionMember/>
          </Flex>
        </PopoverHeader>
        <PopoverBody>
          <EditMemberList />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default MemberSettings;
