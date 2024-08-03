import React from "react";
import SearchBar from "../presentational/searchBar";
import { Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { HeaderState, AppDispatch } from "../../redux/store";

export default function Header() {
  return (
    <Flex
      direction={"row"}
      w="100%"
      h={"50px"}
      justify="space-around"
      align={"center"}
    >
      <SearchBar />
      <Heading as="h5" size="sm">
        Oggi
      </Heading>
    </Flex>
  );
}
