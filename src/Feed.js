import React, { useState } from "react";
import { Box, Flex, Button, SimpleGrid} from "@chakra-ui/react";

import { PageHeader } from "./components/PageHeader";
import { GroupTitle } from "./components/GroupTitle";
import { Filters } from "./components/Filters";
import { Repo } from "./components/Repo";

export function Feed() {
  const [viewType, setViewType] = useState();
  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />

      <Flex justifyContent="space-between" alignItems="center" mb={"25px"} pt={"40px"}>
        <GroupTitle />
        <Filters onViewChange={(viewType) => {
          // console.log(`Inside the Feed: ${viewType}`);
          setViewType(viewType);
        }}/>
      </Flex>

      <SimpleGrid columns={viewType === "list" ? 1 : 3} spacing={8}>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
        <Repo isListView={viewType === "list"}/>
      </SimpleGrid>

      <Flex alignItems={"center"} justifyContent={"center"} my={"20px"}>
        <Button variantColor="teal">Load More</Button>
      </Flex>
    </Box>
  );
}
