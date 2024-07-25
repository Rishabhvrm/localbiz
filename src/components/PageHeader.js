import React from "react";
import { Button, Flex, Icon, Stack } from "@chakra-ui/react";
import {
  FaBook,
  FaChrome,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Brand } from "./Brand";

export function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt={"15px"}>
      <Brand></Brand>
      <Stack direction={"row"} bg={"gray.100"} spacing={"12px"}>
        <Button
          cursor="pointer"
          as="a"
          variant={"link"}
          href={"https://motherearthliteracies.com/"}
          target="_blank"
          fontSize={"15px"}
          iconSpacing={"8px"}
          _hover={{ textDecor: "none" }}
          leftIcon={<FaHome />}
        >
          Mother Earth
        </Button>
        <Button
          cursor="pointer"
          as="a"
          variant={"link"}
          href={"https://motherearthliteracies.com/"}
          target="_blank"
          fontSize={"15px"}
          iconSpacing={"8px"}
          _hover={{ textDecor: "none" }}
          leftIcon={<FaFacebook />}
          
        >
          Facebook
        </Button>
        <Button
          cursor="pointer"
          as="a"
          variant={"link"}
          href={"https://motherearthliteracies.com/"}
          target="_blank"
          fontSize={"15px"}
          iconSpacing={"8px"}
          _hover={{ textDecor: "none" }}
          leftIcon={<FaInstagram />}
          
        >
          Instagram
        </Button>
      </Stack>
    </Flex>
  );
}
