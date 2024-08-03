import { Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/headerSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      return;
    }
    dispatch(setCity(e.target.value));
  };
  return (
    <>
      <Input
        placeholder="Inserisci Citta"
        maxW={"30%"}
        rounded={"15"}
        onChange={handleCityChange}
      />
    </>
  );
};

export default SearchBar;
