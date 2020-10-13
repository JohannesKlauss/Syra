import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/core";
import { useUserQuery } from "@syra/gql-client";
import { useTranslation } from 'react-i18next';

interface Props {
  onClickSignUp: () => void;
  onClickLogIn: () => void;
}

function TopBar({onClickSignUp, onClickLogIn}: Props) {
  const { t } = useTranslation();
  const {data, error, loading} = useUserQuery({variables: {id: 7}});

  return (
    <Box position={"fixed"} top={0} bg={"gray.900"} w={"100%"} h={'72px'} color={"white"} p={'16px'}
         boxShadow={"0px 3px 24px -5px rgba(0,0,0,1)"} zIndex={10}>
      <Box h={'32px'}>
        <Flex alignItems={"center"} justify={"space-between"}>
          <Box>
            <Text fontSize="lg" as={"span"} marginLeft={8} marginRight={12}>
              {t('S Y R A')}
            </Text>
            <Button variant={"link"} marginX={4}>{t('Studio')}</Button>
            <Button variant={"link"} marginX={4}>{t('Pricing')}</Button>
            <Button variant={"link"} marginX={4}>{t('FAQ')}</Button>
            <Button variant={"link"} marginX={4}>{t('About')}</Button>
            <Button variant={"link"} marginX={4}>{t('Community')}</Button>
            <Button variant={"link"} marginX={4}>{t('Blog')}</Button>
          </Box>
          <Box>
            {!loading && !error && data && <Text marginX={4} display={'inline-block'}>{data.user.name}</Text>}
            <Button marginX={4} onClick={onClickLogIn}>{t('Log in')}</Button>
            <Button onClick={onClickSignUp}>{t('Sign up')}</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default TopBar;
