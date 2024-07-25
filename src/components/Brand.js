import React from "react";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

export function Brand() {
  return (
    <Flex alignItems="center">
      <Image src="https://plus.unsplash.com/premium_photo-1718204438280-484021f08ca1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" 
      alt="logo" width="60px" height="60px" rounded={"full"}/>
      <Box ml="10px">
        <Heading color="blue.900">Buffalo Local</Heading>
        <Text color="blue.800">Your Home Community</Text>
      </Box>
    </Flex>
  );
}
