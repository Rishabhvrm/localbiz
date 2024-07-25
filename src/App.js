import React from "react";
import { Box } from "@chakra-ui/react";
import { Feed } from "./Feed";


export function App() {
  return (
      // <Box width="100vw" height="100vh" bg="gray.600" > 
       <Box width="100vw" height="100%" bg="gray.100" py={"30px"}> 
        <Feed />
      </Box>
  );
}