import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import {
  FaBookReader,
  FaGoogleDrive,
  FaIdCard,
  FaRulerCombined,
  FaStar,
} from "react-icons/fa";

export function Repo(props) {
  const { isListView } = props;

  return (
    <Flex borderWidth={1} p={"15px"} bg={"white"} rounded={"md"}>
      <Flex flex={1} flexDir={"column"}>
        {!isListView && (
          <Flex bg={"white"} mb={"15px"}>
            <Image
              src="https://images.unsplash.com/photo-1719937206589-d13b6b008196?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
              w={"50%"}
              h={"100%"}
              rounded={"md"}
            />
            <Box bg={"white"} color={"blue.700"} ml="10px" p={"5px"}>
              <Heading fontSize={"2em"}>Org Name</Heading>
              <Text fontSize={"1em"}>Address</Text>
            </Box>
          </Flex>
        )}

        
          <Heading fontSize={"1em"}>Description</Heading>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Text>
        

        <Stack bg={"white"} direction={"row"} mt={"auto"}>
          <Button
            cursor="pointer"
            as="a"
            variant={"link"}
            href="https://github.com"
            target="_blank"
            fontSize={"0.8em"}
            iconSpacing={"4px"}
            leftIcon={<FaStar />}
            _hover={{ textDecor: "none" }}
          >
            abc@xyz.com
          </Button>
          <Button
            cursor="pointer"
            as="a"
            variant={"link"}
            href="https://github.com"
            target="_blank"
            fontSize={"0.8em"}
            iconSpacing={"4px"}
            leftIcon={<FaBookReader />}
            _hover={{ textDecor: "none" }}
          >
            999-999-9999
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src="https://images.unsplash.com/photo-1719937206589-d13b6b008196?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          h={"100%"}
          w={"10%"}
          rounded={"md"}
          p={"0px"}
        />
      )}
    </Flex>
  );
}
