import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { useTranslation } from "react-i18next";

interface Props {

}

function EmptyFeed({}: Props) {
  const { t } = useTranslation();
  return (
    <Flex justify={'center'} px={64} py={24}>
      <Text fontSize={'2xl'} fontWeight={200}>
        {t('Looks like your feed is empty. Create awesome music to share with your friends!')}
      </Text>
    </Flex>
  );
}

export default EmptyFeed;
