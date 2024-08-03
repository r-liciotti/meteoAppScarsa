import React, { useEffect } from "react";
import { VStack, Box, Image, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, HeaderState } from "../../redux/store";
import { fetchDay } from "../../redux/headerSlice";

const TodayWeather = () => {
  const dayweather = useSelector(
    (state: HeaderState) => state.header.dayWeather
  );
  const dispatch = useDispatch<AppDispatch>();
  const city = useSelector((state: HeaderState) => state.header.city);

  useEffect(() => {
    dispatch(fetchDay(city));
  }, [dispatch, city]);
  return (
    <VStack>
      <Box h="fit-content" margin={"20px"}>
        <Image
          src={dayweather?.current.condition.icon}
          fallbackSrc="https://via.placeholder.com/200"
        />
        <Heading as="h5" size="lg" textAlign="center">
          <Heading size="md">{dayweather?.current.condition.text}</Heading>
        </Heading>
      </Box>
    </VStack>
  );
};

export default TodayWeather;
