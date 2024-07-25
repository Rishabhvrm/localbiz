import React, { useState, useEffect } from "react";
import { Stack, Button, Text, Select } from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaCalendar, FaChevronDown, FaTable, FaList, FaFilter } from "react-icons/fa";
import languages from "../data/languages.json";

export function Filters(props) {
  const { onViewChange } = props;

  // variable and a setter() to set the value in this variable
  const [viewType, setViewType] = useState("grid");

  // adding a listener on viewtype
  // useEffect allows us to listen to the changes on the state variables
  useEffect(() => {
    onViewChange(viewType);
  }, [viewType]);

  return (
    <Stack direction={"row"}>
      {/* <Select>
        {languages.map((languages) => (
          <option value={languages.value}>{languages.label}</option>
        ))}
      </Select> */}
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<FaFilter />}
          borderWidth={1}
          w={"150px"}
          mx={"auto"}
          bg={"white"}
          fontWeight={"normal"}
        >
          Categories
        </MenuButton>
        <MenuList>
          <MenuItem>Health Care</MenuItem>
          <MenuItem>Education</MenuItem>
          <MenuItem>Businesses</MenuItem>
          <MenuItem>Life Style</MenuItem>
          <MenuItem>Add more</MenuItem>
        </MenuList>
      </Menu>
      <Stack direction={"row"} spacing={"0px"}>
        <Button
          h={"100%"}
          onClick={() => setViewType("grid")}
          fontWeight={"normal"}
          roundedRight={0}
          leftIcon={<FaTable />}
          bg={"white"}
          color ={viewType === "grid" ? "gray.900" : "gray.400"}
        >
          Grid
        </Button>
        <Button
          h={"100%"}
          onClick={() => setViewType("list")}
          fontWeight={"normal"}
          roundedLeft={0}
          leftIcon={<FaList />}
          bg={"white"}
          color={viewType === "list" ? "gray.900" : "gray.400"}
        >
          List
        </Button>
      </Stack>
    </Stack>
  );
}
