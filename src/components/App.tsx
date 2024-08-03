import React from "react";

import { Flex, Container } from "@chakra-ui/react";
import "../assets/style/App.css";

import Header from "./container/header";
import TodayWeather from "./presentational/todayWeather";
import DaysContainer from "./container/daysContainer";

function App() {
  return (
    <Flex direction={"column"}>
      <Container className="card" maxW="container.sm" rounded={"20"}>
        <Header />
        <TodayWeather />
        <DaysContainer />
      </Container>
    </Flex>
  );
}

export default App;
