import { HStack } from "@chakra-ui/react";
import React from "react";
import DailyWeather from "../presentational/dailyWeather";
import { useSelector } from "react-redux";
import { HeaderState } from "../../redux/store";

interface Forecastday {
  date: string;
  date_epoch: number;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
}

interface Forecast {
  forecastday: Forecastday[];
}

const DaysContainer = () => {
  const dayweather = useSelector(
    (state: HeaderState) => state.header.dayWeather
  );

  if (!dayweather?.forecast) {
    return null;
  }

  const wa: Forecastday[] = dayweather.forecast.forecastday;

  console.log("wa");
  console.log(dayweather?.forecast.forecastday[0].day.condition.text);

  return (
    <HStack w="100%" h="fit-content" justify={"space-around"}>
      {wa.map((w: any, i: number) => (
        <DailyWeather
          key={i}
          img={w.day.condition.icon}
          weather={w.day.condition.text}
        />
      ))}
    </HStack>
  );
};

export default DaysContainer;
