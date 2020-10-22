import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
} from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import { IoMdAdd } from 'react-icons/io';
import SearchField from "../../../atoms/SearchField/SearchField";
import { useCreateProjectMutation } from '../../../../gql/generated';

interface Props {
}

function TopBar({}: Props) {
  const { t } = useTranslation();
  const [executeMutation] = useCreateProjectMutation();

  const onClickNewSession = async () => {
    console.log('execute');
    const res = await executeMutation();

    console.log('executed', res.data);
  };

  return (
    <Box position={"fixed"} top={0} bg={"gray.900"} w={"100%"} h={'72px'} color={"white"} p={'16px'}
         boxShadow={"0px 3px 24px -5px rgba(0,0,0,1)"} zIndex={10}>
      <Box h={'32px'}>
        <Flex alignItems={"center"} justify={"space-between"}>
          <Box>
            <Text fontSize="lg" as={"span"} marginLeft={8} marginRight={8}>
              {t('S Y R A')} &nbsp; | &nbsp; {t('Live')}
            </Text>
            <Button variant={"link"} marginX={4}>{t('Sessions')}</Button>
            <Button variant={"link"} marginX={4}>{t('Library')}</Button>
            <Button variant={"link"} marginX={4}>{t('Marketplace')}</Button>
            <Button variant={"link"} marginX={8} leftIcon={IoMdAdd} onClick={onClickNewSession}>{t('New Session')}</Button>
          </Box>
          <Box>
            AvatarList of active sessions
          </Box>
          <Box>
            <Flex align={'center'} justify={'space-between'}>
              <SearchField/>
              <AvatarMenu/>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default TopBar;
