import React from "react";
import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/core";
import { FaCheckCircle } from 'react-icons/fa';

interface Props {
  topGradient: string;
  buttonVariantColor: string;
  title: string;
  currency?: string;
  price: string;
  features: string[];
}

export type PricingTierProps = Props;

function PricingTier({ title, price, topGradient, features, buttonVariantColor, currency }: Props) {
  return (
    <Box rounded={8} bg={'white'} overflow={'hidden'} h={'1100px'} marginX={4} flex={1}>
      <Box background={topGradient} w={'100%'} h={6} />
      <Box padding={6} color={'gray.900'} textAlign={'center'}>
        <Text color={'gray.600'} fontSize={'4xl'} fontWeight={300}>
          {title}
        </Text>
        <Flex align={'center'} justify={'center'} marginLeft={currency ? 8 : 0}>
          <Text fontWeight={700} fontSize={'6xl'}>
            {price}
          </Text>
          {currency && (
            <Text marginLeft={4} fontSize={'2xl'}>
              €
            </Text>
          )}
        </Flex>
        <Text fontSize={'2xl'}>{currency ? 'per month' : 'forever'}</Text>
        <Button colorScheme={buttonVariantColor} rounded={'full'} size={'lg'} marginY={8}>
          Get {title}
        </Button>
        <Flex justify={'center'} marginTop={4} marginBottom={12}>
          <List spacing={2} textAlign={'left'}>
            {features.map((text, i) => (
              <ListItem key={i}>
                <ListIcon icon={<FaCheckCircle/>} color="cyan.500" />
                <Text as={'span'}>{text}</Text>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Box>
    </Box>
  );
}

export default PricingTier;
