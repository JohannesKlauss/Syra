import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/core";
import { useTranslation } from 'react-i18next';
import LogInSignUp from "../LogInSignUp/LogInSignUp";

interface Props {
}

function LandingPageTopBar({}: Props) {
  const { t } = useTranslation();

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
          <LogInSignUp/>
        </Flex>
      </Box>
    </Box>
  );
}

export default LandingPageTopBar;
