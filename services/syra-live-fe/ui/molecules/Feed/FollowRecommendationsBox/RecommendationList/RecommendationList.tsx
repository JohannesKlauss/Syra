import React from "react";
import { Avatar, Box, Divider, Flex, ListItem, Text } from "@chakra-ui/core";
import FollowAction from "../../../../atoms/FollowAction/FollowAction";
import { FollowRecommendationsQuery } from "../../../../../gql/generated";
import { useTranslation } from "react-i18next";

interface Props {
  recommendations: FollowRecommendationsQuery["followRecommendations"];
}

function RecommendationList({ recommendations }: Props) {
  const { t } = useTranslation();

  return (
    <>
      {recommendations.map((user) => (
        <ListItem key={user.id}>
          <Flex justify={"space-between"} align={"center"}>
            <Box>
              <Flex align={"center"}>
                <Avatar name={user.name} size={"sm"}/>
                <Box marginLeft={4}>
                  <Text fontWeight={600} fontSize={"sm"} isTruncated>
                    {user.name}
                  </Text>
                  <Text fontSize={"xs"} color={"gray.400"}>
                    <strong>{user.followingCount}</strong> {t("Followers")}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <FollowAction isMeFollowing={user.isMeFollowing} handle={user.handle}/>
          </Flex>
          <Divider/>
        </ListItem>
      ))}
    </>
  );
}

export default RecommendationList;
