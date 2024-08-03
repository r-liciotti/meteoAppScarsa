import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./assets/style/index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <Flex direction={"column"} justify="space-around" h="100%">
          <App />
        </Flex>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
