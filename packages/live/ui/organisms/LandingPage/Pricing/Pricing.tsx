import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/core";
import PricingTier, { PricingTierProps } from "../../../atoms/LandingPage/PricingTier/PricingTier";

interface Props {
  tiers: PricingTierProps[];
}

function Pricing({ tiers }: Props) {
  return (
    <Flex align={"space-around"} marginY={12} marginX={32}>
      <Box flex={1} paddingRight={8}>
        <Text fontSize={"6xl"} fontWeight={700}>S Y R A</Text>
        <Text fontSize={"2xl"} fontWeight={600} marginY={12}>
          SYRA is available in three different editions:<br/>
          <p>The essentials packages has everything you need to get you started.</p>
          <p>If you need more tracks and more collaboration features, Standard might be for you.</p>
          <p>
            For the full experience get the Studio package to enable
            all features that make SYRA the number one online collaborative DAW.
          </p>
        </Text>
        <Text fontWeight={400} marginTop={12} marginBottom={4}>Do you need more information to decide?</Text>
        <Button variantColor={"cyan"} rounded={"full"} size={"lg"}>Check our FAQ</Button>
      </Box>
      <Box flex={1}>
        <div>
          <Flex justify={"space-between"}>
            {tiers.map((tier, i) => <PricingTier {...tier} key={i}/>)}
          </Flex>
        </div>
      </Box>
    </Flex>
  );
}

export default Pricing;
