import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function GroupTitle() {
  return (
    <Text color="blue.700" fontSize={"24px"} fontWeight={"bold"} mt={"15px"} mb={"15px"}>
      Heading:
      <Text
        fontSize={"15px"}
        fontWeight={"normal"}
        as="span"
        color="blue.500"
        ml={"5px"}
      >
        Description
      </Text>
    </Text>
  );
}
