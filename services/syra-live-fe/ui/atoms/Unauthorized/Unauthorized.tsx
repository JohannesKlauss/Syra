import React from "react";
import PageBox from "../PageBox/PageBox";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface Props {

}

function Unauthorized({}: Props) {
  const { t } = useTranslation();
  
  return (
    <PageBox>
      <Box height={'100vh'}>
        <Flex justify={'center'} align={'center'}>
          <Text fontSize={'2xl'} fontWeight={200}>
            {t('You are not logged in. You are being redirected to the login page.')}
          </Text>
        </Flex>
      </Box>
    </PageBox>
  );
}

export default Unauthorized;
