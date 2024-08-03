import React from "react";
import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";

interface PropDailyWeather {
  weather: string;
  img: string;
}

const DailyWeather: React.FC<PropDailyWeather> = ({ weather, img }) => {
  return (
    <>
      <Card shadow={"none"} align={"center"} padding={"5px"}>
        <CardHeader padding={"10px"}>
          <Heading as="h5" size="sm" textAlign="center">
            {weather}
          </Heading>
        </CardHeader>
        <CardBody padding={"0"}>
          <Image src={img} fallbackSrc="https://via.placeholder.com/50" />
        </CardBody>
      </Card>
    </>
  );
};

export default DailyWeather;
