import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/core";

interface Props {

}

function Stopper({}: Props) {
  return (
    <Flex justify={'space-between'} bg={'gray.900'} paddingX={48} paddingY={6}>
      <Box flex={1}>
        <Link color={'gray.400'} href={'#'} fontSize={'sm'} marginRight={12}>Legal</Link>
        <Link color={'gray.400'} href={'#'} fontSize={'sm'}>Cookies</Link>
      </Box>
      <Box flex={1}>
        <Text color={'gray.400'} fontSize={'sm'} textAlign={'end'}>&copy; 2020 Johannes Klauss</Text>
      </Box>
    </Flex>
  );
}

export default Stopper;
