import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/core";

interface Props {

}

function Footer({}: Props) {
  return (
    <Flex bg={'gray.700'} paddingX={48} paddingY={24}>
      <Box flex={1}>
        <Text fontWeight={700} marginBottom={4}>S Y R A</Text>
        <Link color={'gray.500'} href={'#'} display={'block'}>First Steps</Link>
        <Link color={'gray.500'} href={'#'} display={'block'}>Video Tutorials</Link>
        <Link color={'gray.500'} href={'#'} display={'block'}>Documentation</Link>
      </Box>
      <Box flex={2}>
        <Flex justify={'space-between'}>
          <Box>
            <Text fontWeight={700} marginBottom={4}>Features</Text>
            <Link color={'gray.500'} href={'#'} display={'block'}>Music Creation</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Collaboration</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Web Audio Technologies</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Maastr.io</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Download Apps</Link>
          </Box>
          <Box>
            <Text fontWeight={700} marginBottom={4}>Community</Text>
            <Link color={'gray.500'} href={'#'} display={'block'}>Blog</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Instagram</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Facebook</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Twitter</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Discord</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Help</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Music Rights</Link>
          </Box>
          <Box>
            <Text fontWeight={700} marginBottom={4}>Company</Text>
            <Link color={'gray.500'} href={'#'} display={'block'}>About Us</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Store</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Marketplace</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Career</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Press</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Terms of Use</Link>
            <Link color={'gray.500'} href={'#'} display={'block'}>Privacy Policy</Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Footer;
