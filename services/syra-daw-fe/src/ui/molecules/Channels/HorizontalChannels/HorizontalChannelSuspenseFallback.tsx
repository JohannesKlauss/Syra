import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import ChannelBody from "./Strip/ChannelBody";

const HorizontalChannelSuspenseFallback: React.FC = () => {
  return (
    <>
      <Flex p={2}>
        <Button size={"xs"} disabled colorScheme={"teal"} isLoading/>
      </Flex>
      <ChannelBody />
    </>
  );
};

export default HorizontalChannelSuspenseFallback;
